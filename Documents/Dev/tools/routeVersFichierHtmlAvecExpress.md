# Introduction à Express avec un fichier HTML

**Express** est un framework web minimaliste et flexible pour Node.js, utilisé pour créer des applications web et des API. Dans ce guide, vous apprendrez à configurer une route qui renvoie un fichier HTML dans une application Express.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

1. **Node.js** : Téléchargez et installez la dernière version stable depuis [nodejs.org](https://nodejs.org/).
2. **npm** : Inclus avec Node.js.

Vous pouvez vérifier les versions installées avec :

```bash
node -v
npm -v
```

---

## Étape 1 : Initialiser un projet Node.js

1. Créez un nouveau dossier pour votre projet et accédez-y :

   ```bash
   mkdir projet-express-html
   cd projet-express-html
   ```

2. Initialisez un projet Node.js avec la commande suivante :

   ```bash
   npm init -y
   ```

   Cela créera un fichier `package.json` avec des paramètres par défaut.

3. Installez Express :

   ```bash
   npm install express
   ```

---

## Étape 2 : Créer un fichier HTML

1. Créez un dossier nommé `public` dans le répertoire de votre projet :

   ```bash
   mkdir public
   ```

2. Dans ce dossier, créez un fichier `index.html` :

   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Page d'accueil</title>
   </head>
   <body>
       <h1>Bienvenue sur ma page HTML</h1>
   </body>
   </html>
   ```

---

## Étape 3 : Configurer Express pour servir le fichier HTML

1. Créez un fichier `index.js` dans le dossier racine du projet :

   ```bash
   touch index.js
   ```

2. Ajoutez le code suivant dans `index.js` :

   ```javascript
   import express from 'express';
   import path from 'path';

   // Créer une application Express
   const app = express();
   const PORT = 3000;

   // Définir le dossier des fichiers statiques
   const __dirname = path.resolve(); // Résoudre le chemin du dossier courant
   app.use(express.static(path.join(__dirname, 'public')));

   // Route spécifique pour envoyer un fichier HTML
   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });

   // Lancer le serveur
   app.listen(PORT, () => {
       console.log(`Serveur démarré sur http://localhost:${PORT}`);
   });
   ```

3. Assurez-vous que votre `package.json` est configuré pour les modules ESM :

   ```json
   {
       "type": "module"
   }
   ```

4. Démarrez votre serveur :

   ```bash
   node index.js
   ```

5. Accédez à `http://localhost:3000` dans votre navigateur. Vous devriez voir votre fichier HTML s'afficher.

---

## Étape 4 : Ajouter d'autres fichiers HTML (optionnel)

Vous pouvez ajouter d'autres fichiers HTML dans le dossier `public` et configurer des routes pour les servir :

1. Ajoutez un fichier `about.html` dans le dossier `public` :

   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>À propos</title>
   </head>
   <body>
       <h1>Page À propos</h1>
   </body>
   </html>
   ```

2. Ajoutez une route pour ce fichier dans `index.js` :

   ```javascript
   app.get('/about', (req, res) => {
       res.sendFile(path.join(__dirname, 'public', 'about.html'));
   });
   ```

3. Relancez votre serveur et accédez à `http://localhost:3000/about`.

---

## Conclusion

Vous avez maintenant appris à configurer Express pour servir des fichiers HTML. Cette approche est idéale pour des projets simples ou pour structurer une application avant d'intégrer des outils frontend plus complexes comme React ou Vue.js.
