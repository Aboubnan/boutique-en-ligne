# Introduction à npm

`npm` (Node Package Manager) est l'un des gestionnaires de paquets les plus populaires pour JavaScript. Il est livré avec Node.js et permet d'installer, de gérer et de partager des bibliothèques et des outils JavaScript. Que vous développiez une application web, un serveur backend ou des outils en ligne de commande, `npm` est un élément essentiel pour gérer vos dépendances et automatiser des tâches.

## Pré-requis

Avant de commencer, assurez-vous d'avoir :

- **Un ordinateur** avec un système d'exploitation compatible (Windows, macOS ou Linux).
- **Une connexion Internet** pour télécharger les fichiers nécessaires.

## Étapes pour installer npm

### 1. Installer Node.js

`npm` est inclus avec Node.js. Vous devez donc d'abord installer Node.js.

#### a. Télécharger Node.js

1. Rendez-vous sur le site officiel de Node.js : [https://nodejs.org/](https://nodejs.org/).
2. Choisissez la version LTS (Long-Term Support) pour une meilleure stabilité.
3. Téléchargez et installez le fichier correspondant à votre système d'exploitation.

#### b. Vérifier l'installation

Après l'installation, ouvrez un terminal (ou l'invite de commandes) et exécutez les commandes suivantes pour vérifier que Node.js et `npm` sont bien installés :

```bash
node -v
```

Cette commande devrait afficher la version de Node.js, par exemple : `v18.17.1`.

```bash
npm -v
```

Cette commande devrait afficher la version de `npm`, par exemple : `9.6.7`.

### 2. Mettre à jour npm (facultatif)

Bien que `npm` soit installé avec Node.js, il est possible que la version incluse ne soit pas la plus récente. Vous pouvez mettre à jour `npm` avec la commande suivante :

```bash
npm install -g npm@latest
```

Cela mettra à jour `npm` vers la dernière version disponible.

### 3. Configurer npm (facultatif)

Pour une utilisation avancée, vous pouvez configurer `npm`. Par exemple :

- Modifier le dossier global d'installation :

  ```bash
  npm config set prefix ~/.npm-global
  ```

- Vérifier les configurations actuelles :

  ```bash
  npm config list
  ```

## Résolution des problèmes

### Problème : `npm` ou `node` n'est pas reconnu

- Assurez-vous que le chemin d'accès de Node.js est bien ajouté à la variable d'environnement PATH.
- Réinstallez Node.js si nécessaire.

### Problème : Permissions insuffisantes

Si vous rencontrez des erreurs de permission lors de l'installation de paquets, utilisez le mot-clé `sudo` (Linux/macOS) ou exécutez le terminal en tant qu'administrateur (Windows) :

```bash
sudo npm install -g <nom-du-paquet>
```

## Conclusion

Vous avez maintenant installé `npm` et êtes prêt à l'utiliser pour gérer vos projets JavaScript. N'hésitez pas à explorer les nombreux paquets disponibles sur le site officiel de npm : [https://www.npmjs.com/](https://www.npmjs.com/).
