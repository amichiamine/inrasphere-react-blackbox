✦  3. Créer une archive ZIP : Créez un fichier .zip qui contient les éléments suivants. N'incluez PAS le dossier node_modules.
       * Le dossier dist/ (qui contient maintenant le client et le serveur buildés)
       * Le dossier server/ (uniquement si des assets non-JS y sont nécessaires)
       * Le fichier package.json
       * Le fichier package-lock.json

  Phase 2: Configuration de la Base de Données sur cPanel

  Votre application a besoin d'une base de données pour fonctionner.

   1. Créer la base de données :
       * Allez dans cPanel > Bases de données MySQL®.
       * Créez une nouvelle base de données (par ex., cpaneluser_myapp).
       * Créez un nouvel utilisateur de base de données et assignez-lui un mot de passe sécurisé.
       * Ajoutez cet utilisateur à la base de données que vous venez de créer, en lui donnant tous les privilèges.
   2. Importer le schéma :
       * Allez dans cPanel > phpMyAdmin.
       * Sélectionnez la base de données que vous venez de créer dans la colonne de gauche.
       * Allez dans l'onglet "Importer".
       * Cliquez sur "Choisir un fichier" et sélectionnez votre fichier schema_bd.sql local.
       * Cliquez sur "Exécuter" en bas de la page.

  Phase 3: Déploiement de l'Application Node.js sur cPanel

  C'est ici que vous allez configurer et lancer votre serveur.

   1. Téléverser l'archive :
       * Allez dans cPanel > Gestionnaire de fichiers.
       * Naviguez jusqu'au dossier racine où vous souhaitez installer l'application (par ex., à la racine de votre public_html ou dans un
         sous-dossier dédié).
       * Cliquez sur "Charger" et téléversez l'archive .zip que vous avez créée.
       * Une fois téléversée, faites un clic droit sur le fichier .zip et choisissez "Extract".
   2. Configurer l'application Node.js :
       * Allez dans cPanel > Software > Setup Node.js App.
       * Cliquez sur "Create Application".
       * Remplissez le formulaire :
           * Node.js version : Choisissez une version LTS récente (ex: 18.x.x ou 20.x.x).
           * Application mode : Production.
           * Application root : Indiquez le chemin exact où vous avez extrait vos fichiers (ex: /home/cpaneluser/public_html/myapp).
           * Application URL : Choisissez l'URL publique pour accéder à votre application.
           * Application startup file : C'est le point d'entrée de votre serveur. Mettez dist/index.js.
       * Cliquez sur "Create".
   3. Installer les dépendances et configurer l'environnement :
       * Une fois l'application créée, l'interface vous montrera plus d'options.
       * Cliquez sur "Run NPM Install". Cela va lire votre package.json et installer les dépendances de production.
       * Dans la section "Environment Variables", vous devez ajouter les secrets de votre application. Inspirez-vous du fichier
         .env.example. Cliquez sur "Add Variable" pour chaque variable :
           * DB_HOST : localhost (généralement)
           * DB_USER : Le nom d'utilisateur de la base de données que vous avez créé.
           * DB_PASSWORD : Le mot de passe de l'utilisateur.
           * DB_NAME : Le nom de la base de données.
           * JWT_SECRET : Une chaîne de caractères aléatoire et longue.
           * PORT : Cette variable est généralement gérée par cPanel, mais si vous avez des soucis, vous pouvez l'ajouter manuellement.
   4. Démarrer l'application :
       * En haut de la page de configuration de l'application Node.js, cliquez sur le bouton "Restart".

  Phase 4: Vérification

   1. Visitez l'URL que vous avez configurée pour votre application. Vous devriez voir votre page de connexion React.
   2. En cas d'erreur (par ex., "503 Service Unavailable"), retournez à la page "Setup Node.js App". Les journaux (stderr.log et
      stdout.log) situés en bas de la page vous donneront des indices précieux sur ce qui ne fonctionne pas (souvent une variable
      d'environnement manquante ou une erreur de connexion à la base de données).

  Ce processus devrait vous permettre de mettre votre application en ligne avec succès.