# Introduction à Day.js avec Node.js

**Day.js** est une bibliothèque légère et rapide pour la gestion et la manipulation des dates en JavaScript. Elle est une excellente alternative à Moment.js, offrant une API similaire mais avec une taille de fichier plus réduite et des performances accrues.

Dans ce guide, vous apprendrez à installer et configurer Day.js dans un projet Node.js.

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
   mkdir projet-dayjs
   cd projet-dayjs
   ```

2. Initialisez un projet Node.js avec la commande suivante et suivez les instructions :

   ```bash
   npm init -y
   ```

   Cela créera un fichier `package.json` avec les paramètres par défaut.

---

## Étape 2 : Installer Day.js

1. Utilisez npm pour installer la bibliothèque Day.js :

   ```bash
   npm install dayjs
   ```

2. Vérifiez que Day.js est bien ajouté à votre fichier `package.json` dans la section `dependencies` :

   ```json
   "dependencies": {
       "dayjs": "^1.x.x"
   }
   ```

---

## Étape 3 : Utiliser Day.js

1. Créez un fichier `index.js` dans le dossier de votre projet :

   ```bash
   touch index.js
   ```

2. Ouvrez ce fichier dans votre éditeur de code préféré et ajoutez le code suivant :

   ```javascript
   // Importer Day.js
   import dayjs from 'dayjs';

   // Obtenir la date actuelle
   const maintenant = dayjs();
   console.log('Date actuelle :', maintenant.format('YYYY-MM-DD HH:mm:ss'));

   // Manipuler une date
   const future = maintenant.add(7, 'day');
   console.log('Dans 7 jours :', future.format('YYYY-MM-DD'));

   // Comparer des dates
   const isBefore = maintenant.isBefore(future);
   console.log('La date actuelle est-elle avant la date future ? :', isBefore);
   ```

3. Exécutez votre fichier avec Node.js :

   ```bash
   node index.js
   ```

   Vous devriez voir la sortie correspondant à la date actuelle et aux manipulations effectuées.

---

## Étape 4 : Installer des plugins (optionnel)

Day.js prend en charge des plugins pour étendre ses fonctionnalités. Par exemple, pour gérer le support de fuseaux horaires :

1. Installez le plugin :

   ```bash
   npm install dayjs-plugin-utc
   ```

2. Configurez-le dans votre fichier :

   ```javascript
   import dayjs from 'dayjs';
   import utc from 'dayjs/plugin/utc';

   // Charger le plugin
   dayjs.extend(utc);

   const dateUTC = dayjs().utc();
   console.log('Date en UTC :', dateUTC.format());
   ```

---

## Conclusion

Vous savez maintenant comment installer et configurer Day.js avec Node.js. Grâce à sa simplicité et sa flexibilité, vous pouvez facilement manipuler les dates dans vos projets tout en conservant des performances optimales.
