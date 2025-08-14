# IntraSphere – Guide Complet de Déploiement (Débutants)
## Installation Locale Windows + Déploiement cPanel Passenger

Ce guide unifié vous accompagne étape par étape, action par action, pour :
1. **Comprendre l'architecture** du projet IntraSphere
2. **Installer et développer en local** sur Windows avec VS Code
3. **Configurer une base MySQL** via tunnel SSH
4. **Construire l'application** pour la production
5. **Déployer sur cPanel** avec Passenger (hébergement mutualisé)
6. **Sécuriser et maintenir** votre application

---

## 📋 Table des Matières

1. [Vue d'ensemble du projet](#1-vue-densemble-du-projet)
2. [Prérequis et installation](#2-prérequis-et-installation)
3. [Configuration locale Windows](#3-configuration-locale-windows)
4. [Base de données MySQL (optionnel)](#4-base-de-données-mysql-optionnel)
5. [Tests et vérifications](#5-tests-et-vérifications)
6. [Build de production](#6-build-de-production)
7. [Déploiement cPanel étape par étape](#7-déploiement-cpanel-étape-par-étape)
8. [Configuration avancée](#8-configuration-avancée)
9. [Sécurité et maintenance](#9-sécurité-et-maintenance)
10. [Dépannage](#10-dépannage)

---

## 1. Vue d'ensemble du projet

### 🏗️ Architecture IntraSphere

IntraSphere est une application **full-stack** composée de :

**Frontend (Interface utilisateur)**
- **Technologie** : React + TypeScript + Vite
- **Dossier** : `client/`
- **Build final** : `dist/public/` (fichiers statiques)
- **Fonctionnalités** : Interface web moderne, responsive, SPA (Single Page Application)

**Backend (Serveur API)**
- **Technologie** : Express.js + TypeScript
- **Dossier** : `server/`
- **Build final** : `dist/index.js` (ESM) et `dist/index.cjs` (CommonJS)
- **Fonctionnalités** : API REST, authentification, gestion des fichiers, WebSocket

**Base de données (Stockage)**
- **Par défaut** : Mémoire (développement)
- **Production** : MySQL ou PostgreSQL (sessions persistantes)
- **Schéma** : `schema_bd.sql` (structure complète)

**Déploiement**
- **Développement** : Serveur local (port 5000)
- **Production** : cPanel + Passenger (hébergement mutualisé)
- **Entrée Passenger** : `app.js` → `dist/index.cjs`

### 📁 Structure des dossiers

```
votre-projet/
├── client/                 # 🎨 Frontend React
│   ├── src/               # Code source
│   ├── index.html         # Page principale
│   └── ...
├── server/                # 🔧 Backend Express
│   ├── routes/            # Routes API
│   ├── services/          # Services métier
│   ├── middleware/        # Sécurité, auth
│   └── ...
├── shared/                # 🤝 Code partagé
├── dist/                  # 📦 Build production (généré)
│   ├── public/            # Frontend buildé
│   ├── index.js           # Serveur ESM
│   └── index.cjs          # Serveur CJS (Passenger)
├── app.js                 # 🚀 Entrée Passenger
├── package.json           # 📋 Configuration npm
├── schema_bd.sql          # 🗄️ Structure MySQL
└── README files           # 📖 Documentation
```

---

## 2. Prérequis et installation

### 🔧 Logiciels requis

**Sur votre ordinateur Windows :**

1. **Node.js** (version 20 ou plus récente)
   - 📥 Télécharger : https://nodejs.org/
   - ✅ Choisir la version LTS (Long Term Support)
   - ✅ Installer avec les options par défaut

2. **VS Code** (éditeur de code)
   - 📥 Télécharger : https://code.visualstudio.com/
   - ✅ Installer avec les options par défaut

3. **Git** (gestion de versions)
   - 📥 Télécharger : https://git-scm.com/
   - ✅ Installer avec les options par défaut

### ✅ Vérification de l'installation

Ouvrez **l'Invite de commandes** (CMD) ou **PowerShell** :

```bash
# Vérifier Node.js
node --version
# Doit afficher : v20.x.x ou plus

# Vérifier npm
npm --version
# Doit afficher : 10.x.x ou plus

# Vérifier Git
git --version
# Doit afficher : git version x.x.x
```

### 📂 Récupération du projet

**Option 1 : Cloner depuis Git**
```bash
# Ouvrir CMD/PowerShell dans le dossier souhaité
cd C:\xampp\htdocs
git clone [URL_DE_VOTRE_DEPOT] react_package
cd react_package
```

**Option 2 : Télécharger le ZIP**
1. Télécharger le projet en ZIP
2. Extraire dans `C:\xampp\htdocs\react_package`
3. Ouvrir CMD dans ce dossier

---

## 3. Configuration locale Windows

### 📝 Étape 1 : Ouvrir le projet dans VS Code

1. **Lancer VS Code**
2. **Fichier** → **Ouvrir le dossier**
3. **Sélectionner** : `C:\xampp\htdocs\react_package`
4. **Cliquer** : "Oui, je fais confiance aux auteurs"

### 📦 Étape 2 : Installer les dépendances

Dans VS Code, ouvrir le **Terminal intégré** :
- **Menu** : Terminal → Nouveau Terminal
- **Ou** : `Ctrl + Shift + ù`

```bash
# Installer toutes les dépendances
npm install
```

⏳ **Attendre** que l'installation se termine (peut prendre 2-5 minutes)

### 🚀 Étape 3 : Premier lancement

```bash
# Lancer en mode développement
npm run dev
```

**Résultat attendu :**
```
[timestamp] [express] serving on port 5000
[timestamp] [uploads] uploads dir: C:\xampp\htdocs\react_package\server\public\uploads
[timestamp] [session] session store: memory
```

### 🌐 Étape 4 : Tester l'application

1. **Ouvrir votre navigateur**
2. **Aller à** : http://localhost:5000
3. **Vous devriez voir** : La page d'accueil d'IntraSphere

**Test de l'API :**
- **Health check** : http://localhost:5000/healthz
- **Doit afficher** : `{"status":"ok"}`

### 🔐 Étape 5 : Test de connexion

**Identifiants par défaut :**
- **Nom d'utilisateur** : `admin`
- **Mot de passe** : `admin123!`

1. **Cliquer** sur "Se connecter"
2. **Saisir** les identifiants
3. **Vous devriez accéder** au tableau de bord

### ⚙️ Variables d'environnement (optionnel)

Pour personnaliser la configuration, créer un fichier `.env` :

```bash
# Dans le terminal VS Code
echo. > .env
```

**Contenu du fichier `.env` :**
```env
NODE_ENV=development
PORT=5000
SESSION_SECRET=mon-secret-de-dev-tres-long
DISABLE_WS=true
STORAGE_PATH=server/public/uploads
```

---

## 4. Base de données MySQL (optionnel)

### 🎯 Pourquoi utiliser MySQL ?

- **Sessions persistantes** : Les utilisateurs restent connectés même après redémarrage
- **Données sauvegardées** : Annonces, documents, utilisateurs conservés
- **Production ready** : Prêt pour l'hébergement cPanel

### 🔧 Configuration MySQL locale via tunnel SSH

**Prérequis :**
- Accès SSH à votre serveur cPanel
- Base MySQL créée sur cPanel

### 📡 Étape 1 : Créer le tunnel SSH

**Avec OpenSSH (Windows 10/11) :**
```bash
# Remplacer par vos vraies informations
ssh -N -L 13306:127.0.0.1:3306 votre_user@votre-serveur.com
```

**Avec PuTTY :**
1. **Ouvrir PuTTY**
2. **Session** : Saisir `votre-serveur.com`
3. **Connection → SSH → Tunnels** :
   - Source port : `13306`
   - Destination : `127.0.0.1:3306`
   - **Cliquer** : Add
4. **Revenir à Session** → **Cliquer** : Open
5. **Se connecter** avec vos identifiants SSH

### 🗄️ Étape 2 : Importer le schéma

**Via phpMyAdmin (recommandé) :**
1. **Aller à** : https://votre-cpanel.com/phpmyadmin
2. **Sélectionner** votre base de données
3. **Onglet** : Importer
4. **Choisir le fichier** : `schema_bd.sql`
5. **Cliquer** : Exécuter

**Via ligne de commande :**
```bash
mysql -h 127.0.0.1 -P 13306 -u votre_user -p votre_base < schema_bd.sql
```

### 🔗 Étape 3 : Configurer les variables

**Modifier le fichier `.env` :**
```env
NODE_ENV=development
PORT=5000
SESSION_SECRET=mon-secret-de-dev-tres-long
DISABLE_WS=true
STORAGE_PATH=server/public/uploads

# Configuration MySQL via tunnel
MYSQL_HOST=127.0.0.1
MYSQL_PORT=13306
MYSQL_USER=votre_user_mysql
MYSQL_PASSWORD=votre_mot_de_passe
MYSQL_DATABASE=votre_base_mysql
```

### 🔄 Étape 4 : Redémarrer avec MySQL

```bash
# Arrêter le serveur (Ctrl+C)
# Puis relancer
npm run dev
```

**Vérifier dans les logs :**
```
[timestamp] [session] session store: mysql
```

---

## 5. Tests et vérifications

### 🧪 Test automatique (Smoke Test)

Un script de test automatique est fourni :

```bash
# Dans un nouveau terminal (laisser le serveur tourner)
npm run test:smoke
```

**Résultat attendu :**
```
✅ /api/auth/me (non-auth): 401 OK
✅ Login admin: 200 OK  
✅ /api/auth/me (auth): 200 OK
✅ /api/announcements: 200 OK
✅ /api/documents: 200 OK
✅ /api/events: 200 OK
✅ Upload test: 201 OK
✅ Rate limit test: 429 OK
```

### 🔍 Tests manuels

**Test API avec curl (optionnel) :**
```bash
# Health check
curl http://localhost:5000/healthz

# Test auth (doit retourner 401)
curl http://localhost:5000/api/auth/me

# Test login
curl -X POST -H "Content-Type: application/json" \
  -d "{\"username\":\"admin\",\"password\":\"admin123!\"}" \
  -c cookies.txt \
  http://localhost:5000/api/auth/login

# Test avec session
curl -b cookies.txt http://localhost:5000/api/auth/me
```

---

## 6. Build de production

### 🏗️ Comprendre le build

Le build transforme votre code source en fichiers optimisés pour la production :

- **Frontend** : `client/` → `dist/public/` (HTML, CSS, JS minifiés)
- **Backend** : `server/` → `dist/index.js` (ESM) + `dist/index.cjs` (CommonJS)

### 📦 Étape 1 : Build complet

```bash
# Build client + serveur (ESM + CJS)
npm run build:all
```

**Vérifier les fichiers générés :**
```bash
# Lister le contenu de dist/
dir dist
# Doit contenir : public/, index.js, index.cjs
```

### ✅ Étape 2 : Test du build local

```bash
# Tester le serveur en mode production (CJS)
npm run start:cjs
```

**Ouvrir** : http://localhost:5000
**Vérifier** : L'application fonctionne identiquement

### 📋 Scripts disponibles

```bash
# Développement
npm run dev                 # Serveur de dev avec HMR

# Build
npm run build              # Client + serveur ESM
npm run build:all          # Client + serveur ESM + CJS
npm run build:client       # Client uniquement
npm run build:server:cjs   # Serveur CJS uniquement

# Production
npm run start              # Serveur ESM
npm run start:cjs          # Serveur CJS (Passenger)

# Tests
npm run test:smoke         # Tests automatiques
```

---

## 7. Déploiement cPanel étape par étape

### 🎯 Vue d'ensemble du déploiement

Nous allons :
1. **Préparer** les fichiers sur cPanel
2. **Configurer** l'application Node.js
3. **Installer** les dépendances
4. **Builder** l'application
5. **Démarrer** et tester

### 📂 Étape 1 : Upload des fichiers

**Option A : Via Git (recommandée)**

1. **Se connecter** à cPanel
2. **Ouvrir** : Git™ Version Control
3. **Cliquer** : Create Repository
4. **Remplir** :
   - Repository Path : `/home/votre_user/apps/intrasphere`
   - Clone URL : URL de votre dépôt Git
5. **Cliquer** : Create

**Option B : Via File Manager**

1. **Se connecter** à cPanel
2. **Ouvrir** : File Manager
3. **Créer** le dossier : `apps/intrasphere`
4. **Uploader** le ZIP du projet
5. **Extraire** dans le dossier

### 🔧 Étape 2 : Configuration Node.js App

1. **Dans cPanel, ouvrir** : Setup Node.js App
2. **Cliquer** : Create Application

**Paramètres de l'application :**
```
Node.js version: 20.x.x (ou la plus récente disponible)
Application root: apps/intrasphere
Application URL: votre-domaine.com (ou sous-domaine)
Application startup file: app.js
```

3. **Cliquer** : Create

### ⚙️ Étape 3 : Variables d'environnement

**Dans la même page, section "Environment variables" :**

**Variables obligatoires :**
```
NODE_ENV = production
PORT = 5000
SESSION_SECRET = [générer une longue chaîne aléatoire]
```

**Variables optionnelles :**
```
DISABLE_WS = true
STORAGE_PATH = server/public/uploads
```

**Variables MySQL (si base de données) :**
```
MYSQL_HOST = localhost
MYSQL_PORT = 3306
MYSQL_USER = votre_user_mysql
MYSQL_PASSWORD = votre_mot_de_passe
MYSQL_DATABASE = votre_base
```

4. **Cliquer** : Save

### 📦 Étape 4 : Installation des dépendances

**Option A : Via l'interface cPanel**
1. **Dans Setup Node.js App**
2. **Cliquer** : Run NPM Install
3. **Attendre** la fin de l'installation

**Option B : Via Terminal SSH**
```bash
# Se connecter en SSH
ssh votre_user@votre-serveur.com

# Aller dans le dossier
cd apps/intrasphere

# Installer
npm ci
```

### 🏗️ Étape 5 : Build de production

**Via Terminal SSH (recommandé) :**
```bash
# Dans le dossier de l'app
npm run build:all
```

**Via cPanel Terminal :**
1. **Dans Setup Node.js App**
2. **Cliquer** : Terminal
3. **Exécuter** : `npm run build:all`

### 🚀 Étape 6 : Démarrage

1. **Dans Setup Node.js App**
2. **Cliquer** : Restart
3. **Attendre** le message de succès

### ✅ Étape 7 : Vérification

**Test de base :**
1. **Ouvrir** : https://votre-domaine.com
2. **Vérifier** : La page d'accueil s'affiche

**Test API :**
```bash
# Health check
curl https://votre-domaine.com/healthz

# Doit retourner : {"status":"ok"}
```

**Test complet :**
1. **Se connecter** avec admin/admin123!
2. **Naviguer** dans l'interface
3. **Tester** les fonctionnalités principales

---

## 8. Configuration avancée

### 🔒 HTTPS et SSL

**Activation automatique :**
1. **cPanel** → SSL/TLS Status
2. **Sélectionner** votre domaine
3. **Cliquer** : Run AutoSSL
4. **Attendre** l'activation

**Vérification :**
- L'URL doit automatiquement rediriger vers https://
- Le cadenas doit apparaître dans le navigateur

### 📁 Gestion des uploads

**Configuration par défaut :**
- **Dossier** : `server/public/uploads`
- **URL d'accès** : https://votre-domaine.com/uploads/
- **Permissions** : Automatiquement gérées

**Personnalisation :**
```env
# Chemin personnalisé
STORAGE_PATH = /home/votre_user/public_html/uploads
```

### 🌐 WebSocket (optionnel)

**Désactivation (recommandée sur mutualisé) :**
```env
DISABLE_WS = true
VITE_DISABLE_WS = true
```

**Activation (si supporté) :**
```env
DISABLE_WS = false
VITE_DISABLE_WS = false
```

### 📊 Monitoring et logs

**Consulter les logs :**
1. **cPanel** → Setup Node.js App
2. **Votre application** → View Logs

**Logs importants à surveiller :**
```
serving on port 5000
uploads dir: /home/user/apps/intrasphere/server/public/uploads
session store: mysql
```

---

## 9. Sécurité et maintenance

### 🔐 Sécurité de base

**Changement du mot de passe admin :**
1. **Se connecter** avec admin/admin123!
2. **Aller** dans Paramètres/Profil
3. **Changer** le mot de passe
4. **Utiliser** un mot de passe fort

**Variables sensibles :**
```env
# Générer un secret fort (32+ caractères)
SESSION_SECRET = votre-secret-tres-long-et-aleatoire-ici

# Utiliser des mots de passe forts pour MySQL
MYSQL_PASSWORD = mot-de-passe-complexe
```

### 🛡️ Sécurité avancée

**Headers de sécurité (automatiques) :**
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Rate limiting sur /api

**Cookies sécurisés (automatiques en HTTPS) :**
- secure: true
- httpOnly: true
- sameSite: strict

### 🔄 Mise à jour de l'application

**Processus de mise à jour :**

1. **Développer** les modifications en local
2. **Tester** avec `npm run test:smoke`
3. **Commiter** et pousser vers Git

**Sur le serveur :**
```bash
# Via SSH
cd apps/intrasphere
git pull
npm ci
npm run build:all
```

4. **Redémarrer** via cPanel → Setup Node.js App → Restart

### 📋 Maintenance régulière

**Hebdomadaire :**
- Vérifier les logs d'erreur
- Tester les fonctionnalités principales
- Vérifier l'espace disque

**Mensuelle :**
- Mettre à jour les dépendances : `npm update`
- Sauvegarder la base de données
- Vérifier les certificats SSL

---

## 10. Dépannage

### ❌ Problèmes courants et solutions

#### **Erreur : "Could not find the build directory"**

**Cause :** Le dossier `dist/` n'existe pas ou est incomplet

**Solution :**
```bash
# Reconstruire complètement
npm run build:all

# Vérifier la présence des fichiers
ls -la dist/
# Doit contenir : public/, index.js, index.cjs
```

#### **Erreur : "EADDRINUSE: address already in use"**

**Cause :** Le port 5000 est déjà utilisé

**Solutions :**
```bash
# Option 1 : Changer le port
set PORT=5001&& npm run dev

# Option 2 : Tuer le processus existant (Windows)
netstat -ano | findstr :5000
taskkill /PID [numéro_du_processus] /F
```

#### **Erreur : "bcrypt installation failed"**

**Cause :** bcrypt nécessite une compilation native

**Solution :**
```bash
# Remplacer par bcryptjs (100% JavaScript)
npm remove bcrypt
npm install bcryptjs

# Modifier server/services/auth.ts
# Remplacer : import bcrypt from 'bcrypt';
# Par : import bcrypt from 'bcryptjs';

# Rebuilder
npm run build:all
```

#### **Erreur 401 "Invalid credentials"**

**Causes possibles :**
1. Mauvais identifiants (admin/admin123!)
2. Ancien processus avec différent seed
3. Problème de session

**Solutions :**
```bash
# Vérifier les identifiants par défaut
# Username: admin
# Password: admin123!

# Redémarrer complètement
# Ctrl+C puis npm run dev

# Vider le cache navigateur
# Ctrl+Shift+R (hard refresh)
```

#### **Sessions perdues (store: memory)**

**Cause :** Variables MySQL mal configurées

**Vérification :**
```bash
# Vérifier les variables d'environnement
echo $MYSQL_HOST
echo $MYSQL_USER
echo $MYSQL_DATABASE

# Vérifier la connexion MySQL
mysql -h $MYSQL_HOST -P $MYSQL_PORT -u $MYSQL_USER -p
```

**Solution :**
```env
# Corriger les variables dans .env ou cPanel
MYSQL_HOST=127.0.0.1
MYSQL_PORT=3306
MYSQL_USER=votre_user
MYSQL_PASSWORD=votre_password
MYSQL_DATABASE=votre_base
```

#### **Page blanche après déploiement**

**Causes possibles :**
1. Build incomplet
2. Erreur JavaScript
3. Problème de routing SPA

**Solutions :**
```bash
# 1. Vérifier le build
ls -la dist/public/
# Doit contenir index.html et assets/

# 2. Consulter les logs navigateur
# F12 → Console → Rechercher les erreurs

# 3. Vérifier les logs serveur
# cPanel → Setup Node.js App → View Logs
```

#### **Uploads ne fonctionnent pas**

**Causes possibles :**
1. Dossier uploads inexistant
2. Permissions insuffisantes
3. Chemin incorrect

**Solutions :**
```bash
# Vérifier le dossier
ls -la server/public/uploads/

# Créer si nécessaire
mkdir -p server/public/uploads

# Vérifier les permissions (SSH)
chmod 755 server/public/uploads
```

### 🆘 Obtenir de l'aide

**Logs à consulter :**
1. **Logs serveur** : cPanel → Setup Node.js App → View Logs
2. **Logs navigateur** : F12 → Console
3. **Logs MySQL** : cPanel → phpMyAdmin → Status

**Informations à fournir lors d'une demande d'aide :**
- Version Node.js : `node --version`
- Système d'exploitation
- Messages d'erreur complets
- Étapes pour reproduire le problème
- Configuration (sans mots de passe)

---

## 🎉 Félicitations !

Vous avez maintenant une application IntraSphere complètement fonctionnelle :

✅ **Développement local** configuré avec VS Code
✅ **Base MySQL** connectée (optionnel)
✅ **Tests automatiques** opérationnels
✅ **Build de production** maîtrisé
✅ **Déploiement cPanel** réussi
✅ **Sécurité** configurée
✅ **Maintenance** planifiée

### 📚 Ressources supplémentaires

- **Documentation Node.js** : https://nodejs.org/docs/
- **Documentation React** : https://react.dev/
- **Documentation Express** : https://expressjs.com/
- **Documentation Vite** : https://vitejs.dev/

### 🔄 Prochaines étapes

1. **Personnaliser** l'interface selon vos besoins
2. **Ajouter** des utilisateurs et du contenu
3. **Configurer** les sauvegardes automatiques
4. **Monitorer** les performances
5. **Former** les utilisateurs finaux

**Bonne utilisation d'IntraSphere ! 🚀**
