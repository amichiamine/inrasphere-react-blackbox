Task Completed
Analyse, diagnostic et mise à niveau pour déploiement cPanel + exécution locale terminés.

Synthèse de l’architecture
Frontend: React + Vite + TypeScript
Racine: client/
Build: dist/public
Alias Vite: @ -> client/src, @shared -> shared
Backend: Express + TypeScript (server/)
Entrée dev: server/index.ts (tsx)
Routes modulaires: server/routes/{auth,users,content,messaging,training,admin}.ts
Vite en dev (middleware HMR), dist/public en prod
WebSocket applicatif sur /ws (désactivable)
Données: storage MemStorage (seed FR) + DrizzleStorage activé via MySQL_* (drizzle)
Sécurité: Helmet + CSP dev/prod, rate-limit auth et /api, sanitization d’input
Uploads: services/upload avec Multer; exposition sous /uploads
Build serveur: esbuild ESM (dist/index.js) déjà présent; CJS ajouté (dist/index.cjs) pour Passenger
Problèmes identifiés et corrections
Incohérence de mot de passe admin en dev causant 401 au login dans les tests de fumée:
Cause: seed MemStorage = "admin123" alors que la doc/tests utilisent "admin123!"
Correction: alignement seed sur "admin123!" (server/data/storage.ts)
Pas de SessionStore persistant branché:
Implémentation: store MySQL (express-mysql-session) si MYSQL_* présents; store Postgres (connect-pg-simple) si DATABASE_URL; sinon MemoryStore en dev (server/index.ts)
Logs au démarrage: “session store: mysql|postgres|memory”
Robustesse Windows (ports):
Déjà géré: reusePort ignoré sur Windows pour éviter ENOTSUP
Ajout: logs explicites et healthz
Exposition & création du dossier uploads:
Ajout: création récursive non bloquante du répertoire (STORAGE_PATH, défaut server/public/uploads) et static /uploads (server/index.ts)
Log: “uploads dir: …”
Compatibilité cPanel (Passenger / CommonJS):
Ajout build CJS (dist/index.cjs) et app.js à la racine pour Passenger
Scripts npm mis à jour pour build CJS/ESM
Désactivation WebSocket côté serveur et client:
Serveur: DISABLE_WS=true -> WS non initialisé, log “WebSocket disabled…”
Client: déjà support via VITE_DISABLE_WS (code client)
Observabilité:
Ajout /healthz renvoyant {status:"ok"}
Log des requêtes /api (méthode, path, statut, durée, body court)
Fichiers modifiés/ajoutés
server/data/storage.ts: admin seed → "admin123!" pour cohérence dev/tests
server/index.ts:
Création dir uploads + static /uploads
Session store conditionnel (MySQL/PG/Memory)
/healthz
Logs uploads dir + type de session store
WS conditionnel via DISABLE_WS=true
package.json:
Scripts:
build:client, build:server:esm, build:server:cjs, build (client+ESM), build:all (client+ESM+CJS)
start:cjs (production CJS, utile pour Passenger)
test:smoke (lance scripts/tests/smoke.mjs)
Dépendances ajoutées: express-mysql-session, cross-env (dev), @types/express-mysql-session (dev), @types/compression (dev), compression (prod)
app.js: entrée Passenger (require dist/index.cjs)
README_DEPLOY.md: guide complet (local Windows + cPanel)
scripts/tests/smoke.mjs: test de fumée E2E (auth, listes, upload, rate-limit)
Ce que vous pouvez faire maintenant (local Windows)
Installer (si pas déjà fait): npm install
Démarrer en dev avec WS désactivé (pour limiter le bruit) et votre tunnel MySQL si souhaité: CMD: set DISABLE_WS=true&& set PORT=5000&& npm run dev PowerShell: $env:DISABLE_WS="true"; $env:PORT="5000"; npm run dev
Tester l’API (le serveur doit tourner): npm run test:smoke
Identifiants dev: admin / admin123!
Notes:
Si EADDRINUSE: un autre serveur écoute déjà. Arrêter l’ancien process ou changer PORT.
Les logs affichent le type de session store (“mysql|postgres|memory”) et le chemin d’uploads.
Déploiement cPanel (Passenger)
Build en local (recommandé): npm install npm run build:all
Déployer sur cPanel:
Téléverser: dist/, app.js, package.json, package-lock.json (+ node_modules si vous n’installez pas sur le serveur)
cPanel -> Setup Node.js App:
Startup file: app.js
Node >= 18 (idéalement 20+)
Variables d’environnement:
SESSION_SECRET: un secret fort
STORAGE_PATH: server/public/uploads (ou chemin absolu)
DISABLE_WS: true (si WebSocket non supporté)
PORT: 5000 (ou laissez Passenger gérer)
MySQL sessions (via DB cPanel ou tunnel) → MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE
Restart Application
Alternatives:
Build côté serveur: npm install && npm run build:all (depuis le terminal de l’app cPanel)
Recommandations de sécurité (prod)
CSP stricte déjà mise en place côté Helmet (prod): pas d’unsafe-eval; connectSrc limité à self+wss+https
Cookies: secure en production (HTTPS), httpOnly, sameSite=strict
Rate-limit sur /api et /api/auth
Sanitization de l’input
Changer le mot de passe admin par défaut après première connexion
Points de vérification cPanel/mutualisé
WebSocket: souvent non supporté → DISABLE_WS=true côté serveur, VITE_DISABLE_WS=true au build client si vous re-buildiez sur le serveur
Permissions d’écriture sur STORAGE_PATH
Sessions persistantes:
Vérifier que la base est accessible (ou utiliser tunnel/remote DB)
Les logs au démarrage affichent “session store: mysql|postgres|memory”
Commandes utiles
Dév: npm run dev
Build prod: npm run build:all
Démarrage prod local CJS (simule Passenger): npm run start:cjs
Tests (smoke): npm run test:smoke
Livrables ajoutés:

app.js (Passenger)
README_DEPLOY.md (guide complet)
scripts/tests/smoke.mjs (tests de fumée)
Ajustements back: server/index.ts (sessions/WS/uploads/healthz/logs), server/data/storage.ts (admin!), package.json (scripts/build/compatibilité), dépendances pour session store
L’intégralité des changements est en place et prête pour un déploiement mutualisé cPanel robuste (avec sessions persistantes MySQL/PG, CSP stricte, uploads configurables, WS désactivable) et pour un cycle de maintenance local VS Code performant.