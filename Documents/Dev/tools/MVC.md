# Comprendre le Modèle MVC et son Utilisation

Le modèle **MVC** (Model-View-Controller) est une architecture logicielle qui divise une application en trois parties principales :

- **Model** (Modèle) : Gère les données, la logique métier et les règles de l'application.
- **View** (Vue) : Représente l'interface utilisateur, c'est ce que l'utilisateur voit et avec quoi il interagit.
- **Controller** (Contrôleur) : Sert de pont entre le modèle et la vue. Il reçoit les entrées de l'utilisateur, interagit avec le modèle, et met à jour la vue en conséquence.

Cette séparation des responsabilités rend le code plus modulaire, facile à maintenir et à tester.

## Structure de l'Architecture MVC

![Schéma MVC](https://upload.wikimedia.org/wikipedia/commons/a/a0/MVC-Process.svg)

### 1. **Model (Modèle)**
Le modèle est responsable de :
- Gérer les données de l'application.
- Effectuer des opérations sur les données (CRUD : Create, Read, Update, Delete).
- Appliquer la logique métier.

#### Exemple de rôle du modèle :
Une application de gestion d'utilisateurs pourrait avoir un modèle `User` avec des fonctions pour :
- Créer un utilisateur.
- Mettre à jour ses informations.
- Supprimer un compte.

### 2. **View (Vue)**
La vue est l'interface utilisateur. Elle est chargée de :
- Afficher les données au format compréhensible pour l'utilisateur.
- Refléter les modifications de l'état du modèle.

#### Exemple de rôle de la vue :
Une page HTML qui affiche une liste d'utilisateurs avec des boutons pour modifier ou supprimer chaque utilisateur.

### 3. **Controller (Contrôleur)**
Le contrôleur agit comme intermédiaire entre la vue et le modèle. Il est responsable de :
- Recevoir les interactions de l'utilisateur (par exemple, via un clic ou un formulaire).
- Appeler les fonctions du modèle pour traiter les données.
- Mettre à jour la vue avec les données retournées par le modèle.

#### Exemple de rôle du contrôleur :
Si l'utilisateur soumet un formulaire pour créer un nouvel utilisateur, le contrôleur :
1. Récupère les données du formulaire.
2. Appelle le modèle pour sauvegarder les données.
3. Redirige l'utilisateur vers une vue mise à jour (par exemple, une liste des utilisateurs).

## Pourquoi utiliser MVC ?

- **Séparation des responsabilités** : Chaque partie (modèle, vue, contrôleur) a une responsabilité bien définie, rendant le code plus clair et organisé.
- **Réutilisabilité** : Les modèles et les vues peuvent être réutilisés dans d'autres parties de l'application.
- **Maintenance facilitée** : Une modification dans une partie de l'application (par exemple, la vue) n'affecte pas directement les autres parties.
- **Évolutivité** : L'architecture est adaptée aux projets de grande taille.

## Exemple d'implémentation simple de MVC en JavaScript (ESM)

Voici une démonstration d'un système MVC basique pour une liste de tâches.

### Modèle (Model)
```javascript
// taskModel.js
export class TaskModel {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}
```

### Vue (View)
```javascript
// taskView.js
export class TaskView {
  render(tasks) {
    console.clear();
    console.log("Liste des tâches :");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
}
```

### Contrôleur (Controller)
```javascript
// taskController.js
import { TaskModel } from './taskModel.js';
import { TaskView } from './taskView.js';

export class TaskController {
  constructor() {
    this.model = new TaskModel();
    this.view = new TaskView();
  }

  addTask(task) {
    this.model.addTask(task);
    this.updateView();
  }

  updateView() {
    const tasks = this.model.getTasks();
    this.view.render(tasks);
  }
}
```

### Initialisation
```javascript
// main.js
import { TaskController } from './taskController.js';

const controller = new TaskController();

controller.addTask("Apprendre MVC");
controller.addTask("Créer une application en JavaScript");
```

## Organisation d'un Projet MVC

Voici une structure de projet typique pour une application utilisant l'architecture MVC :

```
project-folder/
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── views/
│   └── index.ejs
├── routes/
│   └── userRoutes.js
├── app.js
└── package.json
```

- **`controllers/`** : Contient les fichiers gérant la logique des contrôleurs.
- **`models/`** : Contient les modèles de données et la logique métier.
- **`views/`** : Contient les fichiers d'interface utilisateur (HTML, EJS, etc.).
- **`routes/`** : Définit les routes pour interagir avec l'application (par exemple, les endpoints API).
- **`app.js`** : Point d'entrée principal de l'application.
- **`package.json`** : Fichier de configuration du projet (dépendances, scripts, etc.).

## Étapes pour utiliser MVC dans un projet

1. **Créer le modèle** :
   - Définir les données et la logique métier de l'application.
2. **Créer la vue** :
   - Créer l'interface utilisateur (HTML/CSS) ou des fonctions pour afficher les données.
3. **Créer le contrôleur** :
   - Gérer les interactions de l'utilisateur, appeler les fonctions du modèle et mettre à jour la vue.
4. **Relier les composants** :
   - Importer et initialiser les modules dans un fichier principal.

---

Avec cette structure ESM, tu peux développer des applications modulaires et maintenables. Tu peux également réutiliser chaque composant dans d'autres projets. 🚀
