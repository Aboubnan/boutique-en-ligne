# Introduction à Readline avec Node.js

Le module **Readline** de Node.js permet de lire des entrées utilisateur via la ligne de commande de manière interactive. C'est un outil puissant pour créer des interfaces CLI (Command Line Interface).

Dans ce guide, vous apprendrez à configurer et utiliser Readline dans un projet Node.js.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

1. **Node.js** : Téléchargez et installez la dernière version stable depuis [nodejs.org](https://nodejs.org/).
2. **npm** : Il est inclus avec Node.js.

Vous pouvez vérifier les versions installées en exécutant les commandes suivantes :

```bash
node -v
npm -v
```

---

## Étape 1 : Initialiser un projet Node.js

1. Créez un nouveau dossier pour votre projet et accédez-y :

   ```bash
   mkdir projet-readline
   cd projet-readline
   ```

2. Initialisez un projet Node.js avec la commande suivante :

   ```bash
   npm init -y
   ```

   Cela créera un fichier `package.json` avec les paramètres par défaut.

---

## Étape 2 : Créer un fichier pour utiliser Readline

1. Créez un fichier `index.js` :

   ```bash
   touch index.js
   ```

2. Ouvrez ce fichier dans votre éditeur de code préféré et ajoutez le code suivant :

   ```javascript
   // Importation du module `readline` de Node.js pour gérer les entrées utilisateur via la ligne de commande
   import * as readline from 'node:readline';

   // Importation des flux `stdin` (entrée standard) et `stdout` (sortie standard) à partir du module `process`
   import { stdin as input, stdout as output } from 'node:process';

   // Création d'une interface readline pour interagir avec l'utilisateur via la ligne de commande
   const rl = readline.createInterface({ input, output });

   /*
    * Utilisation de la méthode `rl.question()` pour poser une question à l'utilisateur.
    * Cette méthode est asynchrone et retourne une promesse.
    * Ici, la question posée est : "What do you think of Node.js?"
    */
   const answer = await rl.question('What do you think of Node.js? ');

   // Affiche dans la console le retour de l'utilisateur avec un message formaté
   console.log(`Thank you for your valuable feedback: ${answer}`);

   // Ferme l'interface readline une fois que l'interaction est terminée
   rl.close();
   ```

3. Enregistrez le fichier.

---

## Étape 3 : Exécuter le fichier

1. Exécutez le script avec la commande suivante :

   ```bash
   node index.js
   ```

2. Une fois la commande exécutée, le script posera la question :

   ```
   What do you think of Node.js?
   ```

   Après avoir saisi une réponse, le programme affichera un message formaté contenant votre retour.

---

## Explication du Code

1. **Importation des modules** : Le module `readline` est importé pour créer une interface interactive. Les flux `stdin` et `stdout` permettent de gérer l'entrée et la sortie via la console.
2. **Création de l'interface** : L'interface readline est configurée avec `input` et `output` pour interagir avec l'utilisateur.
3. **Méthode `question()`** : Permet de poser une question à l'utilisateur et de traiter la réponse asynchrone via `await`.
4. **Fermeture de l'interface** : La méthode `rl.close()` termine l'interaction pour libérer les ressources.

---

## Conclusion

Le module Readline est un outil simple et efficace pour gérer des interactions utilisateur dans un environnement Node.js. Avec ce guide, vous pouvez facilement créer des scripts interactifs et améliorer vos compétences en développement CLI.
