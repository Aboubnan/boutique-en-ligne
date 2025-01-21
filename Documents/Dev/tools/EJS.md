# Introduction à EJS avec Node.js

**EJS (Embedded JavaScript)** est un moteur de templates pour Node.js qui permet de générer du HTML en utilisant du code JavaScript directement intégré. Il est utile pour créer des pages dynamiques et intégrer des données dans le HTML.

Dans ce guide, vous apprendrez à installer et utiliser EJS dans un projet Node.js.

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
   mkdir projet-ejs
   cd projet-ejs
   ```

2. Initialisez un projet Node.js avec la commande suivante :

   ```bash
   npm init -y
   ```

   Cela créera un fichier `package.json` avec des paramètres par défaut.

3. Installez Express et EJS :

   ```bash
   npm install express ejs
   ```

---

## Étape 2 : Configurer EJS dans une application Express

1. Créez un fichier `index.js` dans le dossier racine de votre projet :

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

   // Définir le dossier des vues et le moteur de templates
   const __dirname = path.resolve();
   app.set('views', path.join(__dirname, 'views'));
   app.set('view engine', 'ejs');

   // Configurer une route pour la page d'accueil
   app.get('/', (req, res) => {
       const data = { title: 'Accueil', message: 'Bienvenue sur ma page avec EJS !' };
       res.render('index', data);
   });

   // Lancer le serveur
   app.listen(PORT, () => {
       console.log(`Serveur démarré sur http://localhost:${PORT}`);
   });
   ```

---

## Étape 3 : Créer des fichiers de templates EJS

1. Créez un dossier nommé `views` à la racine de votre projet :

   ```bash
   mkdir views
   ```

2. Dans ce dossier, créez un fichier `index.ejs` :

   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title><%= title %></title>
   </head>
   <body>
       <h1><%= message %></h1>
   </body>
   </html>
   ```

---

## Lexique des syntaxes EJS

1. **Insertion de données dynamiques** :
   - `<%= variable %>` : Affiche la valeur d'une variable dans le HTML.
   - Exemple : `<%= title %>` insère la valeur de `title`.

2. **Code JavaScript** :
   - `<% code %>` : Exécute du code JavaScript sans affichage dans le HTML.
   - Exemple :
     ```html
     <% if (user) { %>
         <p>Bonjour, <%= user.name %> !</p>
     <% } else { %>
         <p>Bienvenue, visiteur !</p>
     <% } %>
     ```

3. **Commentaires** :
   - `<%# commentaire %>` : Ajoute un commentaire qui n'apparaît pas dans le HTML généré.
   - Exemple : `<%# Ceci est un commentaire %>`

4. **Inclure un autre template** :
   - `<%- include('fichier') %>` : Inclut un fichier EJS dans un autre.
   - Exemple : `<%- include('header') %>` insère le contenu de `header.ejs`.

5. **Échappement des caractères spéciaux** :
   - `<%- variable %>` : Affiche une variable sans échapper les caractères HTML.
   - Exemple : `<%- '<h1>Titre</h1>' %>` affiche `<h1>Titre</h1>` sans convertir les balises en texte brut.

---

## Étape 4 : Lancer le serveur

1. Démarrez votre serveur avec la commande :

   ```bash
   node index.js
   ```

2. Accédez à `http://localhost:3000` dans votre navigateur. Vous devriez voir le message "Bienvenue sur ma page avec EJS !".

---

## Étape 5 : Ajouter d'autres pages (optionnel)

1. Ajoutez un nouveau fichier EJS dans le dossier `views`, par exemple `about.ejs` :

   ```html
   <!DOCTYPE html>
   <html lang="fr">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title><%= title %></title>
   </head>
   <body>
       <h1><%= message %></h1>
       <p>Ceci est une page à propos.</p>
   </body>
   </html>
   ```

2. Ajoutez une route pour cette page dans `index.js` :

   ```javascript
   app.get('/about', (req, res) => {
       const data = { title: 'À propos', message: 'Bienvenue sur la page À propos.' };
       res.render('about', data);
   });
   ```

3. Relancez le serveur et accédez à `http://localhost:3000/about`.

---

## Conclusion

Avec EJS, vous pouvez facilement créer des pages dynamiques en utilisant JavaScript pour injecter des données dans vos templates HTML. Cela simplifie le développement d'applications web tout en gardant une séparation claire entre la logique et la présentation.
