# Déploiement IntraSphere sur cPanel (Node.js + Passenger)

Ce guide décrit la procédure de déploiement de l’application IntraSphere sur un hébergement mutualisé cPanel avec support Node.js (Passenger). Il couvre la préparation, la configuration, le build, le lancement, et les vérifications post‑déploiement.

Mises à jour clés (alignées avec le code actuel)
- app.js (Passenger) charge désormais dist/index.cjs (CommonJS).
- Build complet recommandé: npm run build:all (client + serveur ESM + serveur CJS).
- Sessions persistantes activables via MySQL (express-mysql-session) ou PostgreSQL (connect-pg-simple), sinon MemoryStore en dev.
- WebSocket désactivable côté serveur (DISABLE_WS) et côté client (VITE_DISABLE_WS).
- STORAGE_PATH par défaut: server/public/uploads (servi sous /uploads).
- Endpoint /healthz disponible pour vérification rapide.
- Script de test de fumée: npm run test:smoke.
- Schéma MySQL exporté: schema_bd.sql.

1) Pré‑requis
- cPanel avec “Setup Node.js App” (Passenger) activé.
- Node.js LTS (>= 18 recommandé, 20+ idéal).
- Accès SSH recommandé (pour npm ci, build, éventuelles migrations).
- Base de données (facultatif selon vos besoins):
  - MySQL (recommandé en mutualisé cPanel) ou
  - PostgreSQL (service externe, ex. Neon/RDS)
- Variables d’environnement (section 4).

2) Structure du projet (résumé)
/ 
├─ client/                 # Frontend React (source)  
├─ server/                 # Backend Express (source)  
├─ shared/                 # Schémas/Types partagés  
├─ dist/                   # Généré après build (production)  
│  ├─ public/              # Build Vite (assets statiques)  
│  ├─ index.js             # Bundle serveur ESM (esbuild)  
│  └─ index.cjs            # Bundle serveur CJS (esbuild) — utilisé par Passenger  
├─ app.js                  # Fichier de démarrage Passenger (importe dist/index.cjs)  
├─ package.json            # Scripts build/start  
├─ schema_bd.sql           # Schéma MySQL complet pour création de tables  
└─ docs/README-deploy-cpanel.md

3) Préparation locale (recommandé)
- Installer les dépendances:
  npm ci

- Construire le build de production complet:
  npm run build:all

Cela génère:
- dist/public (frontend)
- dist/index.js (serveur ESM)
- dist/index.cjs (serveur CJS — utilisé par app.js/Passenger)

4) Variables d’environnement (cPanel > Setup Node.js App > Environment Variables)
Obligatoires/recommandées:
- NODE_ENV = production
- PORT = 5000
- SESSION_SECRET = une longue chaîne aléatoire et secrète

Activations/désactivations:
- DISABLE_WS = true (recommandé sur mutualisé si WebSocket non supporté)
- VITE_DISABLE_WS = true (si vous re‑buildiez le client côté serveur et souhaitez forcer sans WS)

Stockage des fichiers:
- STORAGE_PATH = server/public/uploads (par défaut)

Sessions persistantes (optionnelles):
- MySQL:
  - MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE
- PostgreSQL:
  - DATABASE_URL (ex: postgresql://user:pass@host:5432/dbname?sslmode=require)

Notes sessions:
- Le code détecte automatiquement le store:
  - Si MYSQL_* → MySQLStore (express-mysql-session)
  - Sinon si DATABASE_URL → PGStore (connect-pg-simple)
  - Sinon → MemoryStore (développement)
- La table sessions compatible express-mysql-session est incluse dans schema_bd.sql.

5) Déploiement des fichiers sur cPanel
Méthode Git (recommandée) ou ZIP via File Manager:
- Placez le projet dans /home/USER/apps/intrasphere (exemple).
- Si vous n’avez pas buildé en local, vous pourrez builder côté serveur (section 6).

6) Configuration de l’application Node.js (Passenger)
1. cPanel > Setup Node.js App.
2. Create Application:
   - Node.js version: LTS supportée par l’hébergeur.
   - Application root: dossier du projet (ex: apps/intrasphere).
   - Application URL: domaine/sous‑domaine.
   - Application startup file: app.js
3. Enregistrez.
4. Renseignez les variables d’environnement (section 4), puis Save.

7) Installation et Build côté serveur (si non fait en local)
- Dans “Setup Node.js App”, cliquez “Run NPM Install” (ou SSH):
  npm ci

- Build complet (recommandé):
  npm run build:all

Résultat attendu:
- dist/public (assets frontend)
- dist/index.cjs (bundle serveur pour Passenger)

8) Lancement / Redémarrage
- Dans “Setup Node.js App” > “Restart” après config/build.
- Passenger chargera app.js, qui require dist/index.cjs et démarre le serveur.

9) Vérifications post‑déploiement
- Frontend:
  - Ouvrez l’URL configurée: la page d’accueil doit s’afficher.
  - Naviguez dans l’interface (public/dashboard/login, etc.).
- API:
  - Health check:
    curl -i https://votre-domaine.tld/healthz
    (Doit renvoyer {"status":"ok"}.)
  - Non connecté:
    curl -i https://votre-domaine.tld/api/auth/me
    → 401 attendu
  - Login (adapter si vous avez modifié les identifiants):
    curl -i -c cookies.txt -b cookies.txt -H "Content-Type: application/json" \
      -d "{\"username\":\"admin\",\"password\":\"admin123!\"}" \
      https://votre-domaine.tld/api/auth/login
  - Accès aux listes:
    curl -i -b cookies.txt https://votre-domaine.tld/api/announcements
- WebSocket (si activé):
  - Si DISABLE_WS=false, vérifier les logs et handshake sur /ws (selon support hébergeur).

10) Uploads et fichiers statiques
- Par défaut: STORAGE_PATH = server/public/uploads
- Le serveur sert /uploads depuis ce répertoire.
- Assurez-vous que ce dossier est inscriptible par le processus Node.
- Les fichiers frontend sont servis depuis dist/public (Vite build).

11) Sécurité (production)
- Helmet + CSP stricte (pas d’unsafe-eval; adapter si vous utilisez des CDN/fonts externes).
- Rate limiting actif sur /api et /api/auth.
- Sanitization d’input (XSS basique).
- Cookies:
  - secure: true (HTTPS)
  - httpOnly: true
  - sameSite: strict
- Changez le mot de passe admin par défaut après première connexion.

12) Schéma MySQL (optionnel)
- Import initial de la base depuis schema_bd.sql (phpMyAdmin ou CLI):
  mysql -h HOST -P PORT -u USER -p DB_NAME < schema_bd.sql
- Inclut la table sessions pour express-mysql-session et l’ensemble des tables de l’application.

13) Tests rapides (smoke)
- Démarrez l’application, puis:
  npm run test:smoke
- Le script exécute un ensemble de requêtes (auth, listes, upload, rate-limit) et vérifie les codes de statut.

14) Dépannage
- “Could not find the build directory”:
  - Exécutez npm run build:all pour générer dist/public et dist/index.cjs.
- 502/503:
  - Restart l’application dans cPanel et vérifiez les logs cPanel/Passenger.
- EADDRINUSE (port déjà utilisé):
  - Un autre serveur tourne; changez PORT ou arrêtez l’ancien process.
- ENOTSUP (Windows reusePort):
  - Sans impact sur cPanel; côté Windows local déjà géré automatiquement.
- bcrypt échoue à l’installation (mutualisé):
  - bcrypt nécessite une compilation; en mutualisé cela peut échouer.
  - Solution: utiliser bcryptjs (100% JS)
    npm remove bcrypt
    npm install bcryptjs
  - Adapter le code (server/services/auth.ts): import bcrypt from 'bcryptjs';
  - Puis npm run build:all et Restart.
- Page blanche (SPA):
  - Assurez-vous que le serveur renvoie index.html en fallback (géré par serveStatic). Pour un déploiement statique pur (sans Node), voir l’Option SPA dans README_DEPLOY.md (racine).

15) Mise à jour de l’application
- Via Git:
  - git pull
  - npm ci
  - npm run build:all
  - Restart dans cPanel
- Via ZIP:
  - Remplacez les fichiers
  - npm ci && npm run build:all
  - Restart

16) Check‑list de validation (prod)
- [ ] URL/HTTPS opérationnels
- [ ] Page d’accueil OK
- [ ] /healthz → 200
- [ ] /api/auth/me → 401 non connecté; après login → 200
- [ ] CRUD de base (announcements/documents/events) OK (selon rôles)
- [ ] Upload avatar/document OK et accessible sous /uploads/…
- [ ] Headers de sécurité (Helmet/CSP) présents
- [ ] Rate‑limit actif
- [ ] Logs serveur affichent “serving on port …”, “uploads dir: …”, “session store: …”

FAQ
- Où changer le port ?
  - Dans cPanel > Environment Variables, PORT=5000.
- Comment forcer une reconstruction ?
  - npm ci && npm run build:all puis Restart.
- Comment activer/désactiver WebSocket ?
  - DISABLE_WS=true (serveur); VITE_DISABLE_WS=true (client si vous re‑buildiez côté serveur).

Récapitulatif rapide
- Créer l’app Node.js (Passenger): startup app.js, variables d’environnement (SESSION_SECRET, PORT, etc.).
- Installer & build: npm ci && npm run build:all.
- Restart.
- Tester /healthz, /api, front.
