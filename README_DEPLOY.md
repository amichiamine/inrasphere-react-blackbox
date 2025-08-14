# IntraSphere – Guide d’installation locale (Windows) et déploiement cPanel (Passenger)

Ce document explique:
- l’architecture du projet,
- la configuration locale Windows (VS Code),
- l’utilisation d’une base MySQL (sessions persistantes) via tunnel,
- le build et la mise en production sur un hébergement mutualisé cPanel (Passenger),
- la sécurisation (CSP), le chemin d’uploads, et l’activation/désactivation du WebSocket,
- le dépannage des erreurs courantes.

## 1) Architecture et points clés

- Frontend: React + Vite + TypeScript
  - Racine frontend: client/
  - Build vers: dist/public
- Backend: Express + TypeScript
  - Entrée dev: server/index.ts (tsx)
  - Build serveur: esbuild en ESM (dist/index.js) et CommonJS (dist/index.cjs)
  - Routes: server/routes/*
  - Sécurité: Helmet (CSP dev/prod), rate-limit (/api et /api/auth), sanitization d’input
  - Sessions: express-session
    - Store persistant MySQL si variables MYSQL_* présentes
    - Store persistant Postgres si DATABASE_URL présent
    - Sinon MemoryStore (développement)
- Fichiers statiques:
  - SPA servie depuis dist/public en prod
  - Fichiers uploadés servis sous /uploads
- WebSocket:
  - Serveur: /ws (désactivable via DISABLE_WS=true)
  - Client: désactivable via VITE_DISABLE_WS=true
- Build de production:
  - Client: Vite
  - Serveur: esbuild (ESM + CJS)
- Entrée Passenger cPanel:
  - app.js (require de dist/index.cjs)

## 2) Variables d’environnement (principales)

- PORT: Port d’écoute HTTP (par défaut 5000)
- SESSION_SECRET: Secret pour signer les cookies de session (obligatoire en prod)
- STORAGE_PATH: Répertoire d’uploads (défaut: server/public/uploads)
- DISABLE_WS: "true" pour désactiver le WebSocket serveur
- VITE_DISABLE_WS: "true" pour désactiver le client WebSocket (au build client)
- Base MySQL (sessions persistantes):
  - MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE
- Base Postgres (sessions persistantes alternative):
  - DATABASE_URL (ex: postgres://user:pass@host:5432/dbname)

Notes:
- Le code détecte automatiquement le store de session:
  - MYSQL_* -> MySQLStore
  - sinon DATABASE_URL -> PGStore
  - sinon MemoryStore (développement)
- Le répertoire d’uploads est créé automatiquement si manquant.

## 3) Développement local (Windows + VS Code)

Prérequis:
- Node.js 20+ (ex: v22.x)
- npm 10+
- VS Code

Installation:
1. Ouvrir le projet dans VS Code.
2. Installer les dépendances:
   npm install

Lancement en développement:
- Désactiver WebSocket (optionnel) pour éviter du bruit en dev:
  DISABLE_WS=true PORT=5000 npm run dev
  (En PowerShell)
  $env:DISABLE_WS="true"; $env:PORT="5000"; npm run dev
  (En CMD)
  set DISABLE_WS=true&& set PORT=5000&& npm run dev

Accès:
- API & SPA: http://localhost:5000
- Health check: http://localhost:5000/healthz
- Exemples d’API:
  - /api/auth/login, /api/auth/me, /api/announcements, /api/documents, /api/events
  - Upload: POST /api/upload (après authentification)

Identifiants par défaut (développement):
- admin / admin123!

Notes:
- En dev, Vite est utilisé en middleware (HMR). Des messages WS HMR 400 ne concernent pas le WebSocket applicatif /ws.

## 4) Sessions persistantes via MySQL (tunnel SSH)

Objectif: stocker les sessions dans MySQL (cPanel) même en dev.

Étapes:
1. Établir un tunnel SSH local vers MySQL cPanel:
   - OpenSSH:
     ssh -N -L 13306:127.0.0.1:3306 user@votre_serveur_cpanel
   - PuTTY: Tunnels -> Source port 13306, Destination 127.0.0.1:3306, Ajouter, puis Open.

2. Définir variables d’environnement avant npm run dev:
   (PowerShell)
   $env:MYSQL_HOST="127.0.0.1"
   $env:MYSQL_PORT="13306"
   $env:MYSQL_USER="xxxx"
   $env:MYSQL_PASSWORD="xxxx"
   $env:MYSQL_DATABASE="xxxx"
   $env:DISABLE_WS="true"
   $env:PORT="5000"
   npm run dev

   (CMD)
   set MYSQL_HOST=127.0.0.1&& set MYSQL_PORT=13306&& set MYSQL_USER=xxxx&& set MYSQL_PASSWORD=xxxx&& set MYSQL_DATABASE=xxxx&& set DISABLE_WS=true&& set PORT=5000&& npm run dev

3. Vérifier dans les logs au boot:
   - session store: mysql
   - uploads dir: .../server/public/uploads

## 5) Tests de fumée API (smoke test)

Un script est fourni:
- scripts/tests/smoke.mjs
- Script npm:
  npm run test:smoke

Procédure:
1. Démarrer le serveur (npm run dev).
2. Dans un second terminal, exécuter:
   npm run test:smoke
3. Le script effectue:
   - /api/auth/me non-auth (401)
   - login admin
   - /api/auth/me auth (200)
   - listes: /api/announcements, /api/documents, /api/events
   - uploads (succès/erreur)
   - rate limit (6 tentatives erronées)

## 6) Build de production (local)

Construire client + serveur:
- Build ESM + client (par défaut):
  npm run build
- Build complet (client + serveur ESM + serveur CJS):
  npm run build:all

Sorties:
- Frontend: dist/public
- Server ESM: dist/index.js
- Server CJS: dist/index.cjs

## 7) Déploiement cPanel (Passenger)

Préparation:
- Compiler en local:
  npm run build:all
- Vérifier présence de:
  - dist/public (client)
  - dist/index.cjs (serveur CJS)
  - app.js (fichier d’entrée Passenger)

Option 1 – Déployer depuis cPanel:
1) cPanel -> Setup Node.js App:
   - Application root: dossier de l’app (ex: /home/USER/apps/intrasphere)
   - Application URL: votre domaine/sous-domaine
   - Node.js version: >= 18 (idéalement 20+)
   - Application startup file: app.js
2) Variables d’environnement à renseigner:
   - PORT: 5000 (ou laissé vide si géré par Passenger)
   - SESSION_SECRET: un secret fort
   - STORAGE_PATH: server/public/uploads (ou un chemin absolu)
   - DISABLE_WS: true (recommandé si WebSocket non supporté)
   - VITE_DISABLE_WS: true (si vous re-buildiez le client sur le serveur)
   - MYSQL_* ou DATABASE_URL (si sessions persistantes)
3) Installer dépendances et construire (si build côté serveur):
   - Ouvrir Terminal cPanel dans l’application:
     npm install
     npm run build:all
4) Restart Application dans l’interface Node.js App cPanel.

Option 2 – Build local + upload:
- Construire en local:
  npm install
  npm run build:all
- Uploader les fichiers nécessaires:
  - dist/ (contenant public et index.cjs)
  - app.js
  - package.json et package-lock.json
  - node_modules (si pas d’installation sur le serveur)
- Configurer l’app comme ci-dessus, puis Restart Application.

Remarques importantes:
- WebSocket:
  - Sur certains mutualisés, WS n’est pas disponible ou bloqué. Laissez DISABLE_WS=true et VITE_DISABLE_WS=true.
- CSP (Content-Security-Policy) production:
  - Par défaut, scriptSrc 'self', styleSrc 'self' 'unsafe-inline' fonts.googleapis.com, fontSrc fonts.gstatic.com, imgSrc https: data:, connectSrc 'self' wss: https:
  - Ajoutez vos domaines CDN/Média si nécessaires.
- Uploads:
  - STORAGE_PATH doit être accessible en écriture par le processus Node.
  - Le serveur sert /uploads depuis ce dossier.
- Sessions:
  - Assurez-vous que la base (MySQL/PG) est accessible depuis le serveur cPanel (ou via un tunnel bastion). Configurez correctement MYSQL_* ou DATABASE_URL.

## 8) Sécurité et conformité

- Helmet + CSP strict en production (pas d’unsafe-eval pour JS).
- Rate-limit: /api et /api/auth pour limiter les abus.
- Sanitization: nettoyage basique des entrées (XSS).
- Cookies:
  - secure: true en production (HTTPS)
  - httpOnly: true
  - sameSite: strict
- Changez le mot de passe admin par défaut après première connexion.

## 9) Dépannage

- EADDRINUSE (port déjà utilisé):
  - Un serveur est déjà en cours. Arrêtez-le ou changez PORT.
- ENOTSUP (Windows reusePort):
  - Évité: reusePort activé uniquement hors Windows.
- Avertissements HMR WS 400 en dev:
  - Non bloquants, dus au middleware Vite. Sans impact sur /ws applicatif.
- PostCSS “from option”:
  - Avertissement non bloquant. Votre CSS/Tailwind reste fonctionnel.
- 401 “Invalid credentials” en tests:
  - Par défaut, admin/admin123! 
  - Assurez-vous qu’aucun ancien processus serveur avec un autre seed ne tourne encore.
- Sessions “memory” en production:
  - Vérifier vos MYSQL_* ou DATABASE_URL. Le log d’amorçage indique “session store: mysql|postgres|memory”.

## 10) Scripts utiles

- Développement:
  npm run dev
- Build:
  npm run build (client + serveur ESM)
  npm run build:all (client + serveur ESM + serveur CJS)
- Production locale (CJS):
  npm run start:cjs
- Test API (smoke):
  npm run test:smoke

## 11) Notes techniques

- Le projet journalise:
  - “uploads dir: …” et “session store: …” au démarrage,
  - Les requêtes API (méthode, chemin, statut, durée).
- Migrations:
  - Hash des mots de passe existants et création d’un admin par défaut si aucun admin.
- Identifiants seed:
  - admin / admin123! (alignés avec la doc et les tests).