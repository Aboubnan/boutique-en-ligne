# Introduction au module HTTP avec Node.js

Le module **HTTP** de Node.js est intégré nativement et permet de créer des serveurs HTTP sans nécessiter de dépendances supplémentaires. Cela en fait un outil idéal pour comprendre les bases de la création d'un serveur web.

Dans ce guide, vous apprendrez à configurer un serveur HTTP basique pour retourner une réponse HTML simple.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :

1. **Node.js** : Téléchargez et installez la dernière version depuis [nodejs.org](https://nodejs.org/).

Vérifiez votre version de Node.js avec la commande suivante :

```bash
node -v
```

---

## Étape 1 : Créer un projet et un fichier principal

1. Créez un nouveau dossier pour votre projet et accédez-y :

   ```bash
   mkdir projet-http
   cd projet-http
   ```

2. Créez un fichier principal `index.js` :

   ```bash
   touch index.js
   ```

3. Ouvrez ce fichier dans votre éditeur de code préféré et ajoutez le code suivant :

   ```javascript
   // Importation du module HTTP de Node.js
   // Ce module permet de créer et gérer des serveurs HTTP.
   ;

   // Création d'un serveur HTTP
   // La méthode `http.createServer()` prend une fonction callback qui sera exécutée chaque fois qu'une requête HTTP est reçue.
   const server = http.createServer((req, res) => {
       // Réglage des en-têtes de la réponse HTTP
       // Ici, on définit le type de contenu retourné (`text/html`) et l'encodage (`utf8`) pour gérer correctement les caractères spéciaux.
       res.setHeader('Content-Type', 'text/html;charset=utf8');

       // Écriture de la réponse HTTP. Ici, on retourne simplement "Hello world".
       res.write("Hello world");

       // Fin de la réponse. Cela envoie la réponse au client et termine le traitement.
       res.end();
   });

   // Le serveur est configuré pour écouter sur le port 3000
   // La fonction callback passée à `server.listen` sera exécutée une fois que le serveur est prêt.
   server.listen(3000, () => {
       // Affichage dans la console de l'URL à utiliser pour accéder au serveur.
       console.log('http://localhost:3000');
   });
   ```

---

## Étape 2 : Exécuter le serveur

1. Démarrez le serveur avec la commande suivante :

   ```bash
   node index.js
   ```

2. Ouvrez un navigateur web ou un outil comme `curl` et accédez à l'URL suivante :

   ```
   http://localhost:3000
   ```

   Vous devriez voir "Hello world" affiché dans votre navigateur.

---

## Étape 3 : Améliorer le contenu HTML

Pour retourner une page HTML plus complexe, modifiez le contenu de la réponse comme suit :

```javascript
res.write(`
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Serveur HTTP</title>
</head>
<body>
    <h1>Bienvenue sur mon serveur HTTP avec Node.js</h1>
    <p>Ceci est une page HTML générée par un serveur Node.js.</p>
</body>
</html>
`);
```

Rédémarrez le serveur et rechargez la page dans votre navigateur pour voir les changements.

---

## Conclusion

Le module HTTP de Node.js est une solution simple pour démarrer avec les serveurs web. Bien que minimaliste, il fournit une base solide pour comprendre le fonctionnement des requêtes et des réponses HTTP avant d'utiliser des frameworks plus complexes comme Express.
