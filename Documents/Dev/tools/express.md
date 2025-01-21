# Introduction à Express avec Node.js

**Express** est un framework web minimaliste et flexible pour Node.js, utilisé pour créer des applications web et des API. Il simplifie la gestion des routes, des requêtes et des réponses.

Dans ce guide, vous apprendrez à installer et configurer Express pour démarrer un serveur web basique.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

1. **Node.js** : Téléchargez et installez la dernière version stable depuis [nodejs.org](https://nodejs.org/).
2. **npm** : Inclus avec Node.js.

Vérifiez les versions installées avec :

```bash
node -v
npm -v
```

---

## Étape 1 : Initialiser un projet Node.js

1. Créez un nouveau dossier pour votre projet et accédez-y :

   ```bash
   mkdir projet-express
   cd projet-express
   ```

2. Initialisez un projet Node.js avec :

   ```bash
   npm init -y
   ```

   Cela créera un fichier `package.json` avec des configurations par défaut.

---

## Étape 2 : Installer Express

1. Installez Express en tant que dépendance :

   ```bash
   npm install express
   ```

2. Vérifiez que `express` est bien ajouté dans la section `dependencies` de votre fichier `package.json` :

   ```json
   "dependencies": {
       "express": "^4.x.x"
   }
   ```

---

## Étape 3 : Créer un serveur avec Express

1. Créez un fichier `index.js` :

   ```bash
   touch index.js
   ```

2. Ajoutez le code suivant dans `index.js` :

   ```javascript
   // Importer le module Express
   import express from 'express';

   // Créer une instance de l'application Express
   const app = express();

   // Définir un port pour le serveur
   const PORT = 3000;

   // Configurer une route GET pour la page d'accueil
   app.get('/', (req, res) => {
       res.send('Bienvenue sur mon serveur Express !');
   });

   // Lancer le serveur et écouter sur le port défini
   app.listen(PORT, () => {
       console.log(`Serveur démarré sur http://localhost:${PORT}`);
   });
   ```

3. Enregistrez le fichier.

---

## Étape 4 : Démarrer le serveur

1. Modifiez votre fichier `package.json` pour activer les modules ESM :

   ```json
   {
       "type": "module"
   }
   ```

2. Démarrez votre application avec Node.js :

   ```bash
   node index.js
   ```

3. Une fois le serveur démarré, vous verrez ce message dans le terminal :

   ```
   Serveur démarré sur http://localhost:3000
   ```

4. Ouvrez un navigateur web et accédez à `http://localhost:3000`. Vous devriez voir le message suivant affiché :

   ```
   Bienvenue sur mon serveur Express !
   ```

---

## Étape 5 : Ajouter des routes supplémentaires (optionnel)

Ajoutez des routes pour gérer différents types de requêtes :

```javascript
// Route pour une page "À propos"
app.get('/about', (req, res) => {
    res.send('À propos de ce serveur.');
});

// Route pour une page "Contact"
app.get('/contact', (req, res) => {
    res.send('Contactez-nous à contact@monserveur.com');
});
```

Relancez le serveur pour appliquer les changements et testez les nouvelles routes.

---

## Conclusion

Vous avez maintenant un serveur Express fonctionnel utilisant les modules ESM. Ce framework simplifie la création de routes et la gestion des requêtes/réponses, tout en restant extensible pour des projets plus complexes.
