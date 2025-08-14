# Guide de Déploiement cPanel pour IntraSphere

Ce guide vous accompagne pas à pas pour déployer votre application IntraSphere sur un hébergement cPanel.

## Prérequis

Avant de commencer, assurez-vous d'avoir :

1.  **Fichiers de l'application** : Le contenu du dossier `deploy_cpanel` a été décompressé à la racine de votre application sur le serveur, par exemple dans `public_html/inrasphere`.
2.  **Accès cPanel** : Vous êtes connecté à votre interface cPanel.
3.  **Base de données** : Vous avez créé une base de données MySQL via l'interface cPanel ("MySQL Databases"). Vous devez avoir noté :
    *   Le nom exact de la base de données (ex: `zzdwczcx_instraphere_db`)
    *   Le nom d'utilisateur de la base de données (ex: `zzdwczcx_intra_u`)
    *   Le mot de passe de cet utilisateur.

---

## Étape 1: Création de l'application Node.js

Nous allons d'abord déclarer l'application à cPanel pour qu'il sache comment la gérer et pour préparer l'environnement du terminal.

1.  Dans le menu de cPanel, trouvez et ouvrez l'application **"Setup Node.js App"** (dans la section "Logiciel").
2.  Cliquez sur le bouton **"CREATE APPLICATION"**.
3.  Remplissez le formulaire avec les informations suivantes :
    *   **Node.js version** : Choisissez la version la plus récente disponible (par exemple, 22.x.x).
    *   **Application mode** : Choisissez **Production** dans la liste déroulante.
    *   **Application root** : Indiquez le chemin vers votre application, par exemple `public_html/inrasphere`.
    *   **Application URL** : Choisissez le domaine ou sous-domaine que vous souhaitez associer à l'application.
    *   **Application startup file** : Entrez : **`app.js`**
4.  Cliquez sur le bouton **"CREATE"**.

## Étape 2: Installation des dépendances via le terminal

Maintenant que l'application est créée, nous allons utiliser le terminal pour installer les paquets Node.js.

1.  Sur la page "Setup Node.js App", en haut, **copiez la commande qui commence par `source`**.
2.  Retournez au menu de cPanel et ouvrez l'application **"Terminal"**.
3.  Dans le terminal, **collez la commande `source`** et appuyez sur Entrée.
4.  Naviguez vers le dossier de votre application :
    ```bash
    cd public_html/inrasphere
    ```
5.  Lancez l'installation (si le bouton "Run NPM Install" de l'interface a échoué) :
    ```bash
    npm install --production
    ```

## Étape 3: Configuration des variables d'environnement (La bonne méthode)

C'est l'étape la plus importante. Le code de l'application attend des variables d'environnement séparées.

1.  Retournez sur la page de configuration de votre application dans **"Setup Node.js App"**.
2.  Allez à la section **"Environment Variables"**.
3.  **Supprimez** la variable `DATABASE_URL` si elle existe.
4.  Cliquez sur **"Add Variable"** et ajoutez les **6 variables** suivantes, une par une, avec vos informations :

    *   Nom : `MYSQL_HOST`
    *   Valeur : `localhost`

    *   Nom : `MYSQL_PORT`
    *   Valeur : `3306`

    *   Nom : `MYSQL_USER`
    *   Valeur : `zzdwczcx_intra_u`

    *   Nom : `MYSQL_PASSWORD`
    *   Valeur : `Didnous2506`

    *   Nom : `MYSQL_DATABASE`
    *   Valeur : `zzdwczcx_instraphere_db`

    *   Nom : `SESSION_SECRET`
    *   Valeur : `Tr3s_L0ngue_Phr4se_S3crete_Pour_Mon_App_!2025`

5.  Après avoir ajouté toutes les variables, cliquez sur **"Save"**.

## Étape 4: Démarrage et Vérification

1.  En haut de la page, cliquez sur le bouton **"RESTART"**. Ce redémarrage est nécessaire pour que les nouvelles variables soient prises en compte.
2.  Patientez quelques secondes.
3.  Ouvrez l'URL de votre application. Elle devrait maintenant s'afficher correctement.

**En cas de problème :** Consultez les logs (`stderr`) en bas de la page "Setup Node.js App" pour voir le message d'erreur détaillé.
