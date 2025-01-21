# Fiche récapitulative : Import / Export ESM (ECMAScript Modules) en Node.js

Avec l'introduction des **ECMAScript Modules (ESM)**, Node.js prend en charge une syntaxe moderne pour l'importation et l'exportation des modules, similaire à celle utilisée dans les navigateurs. Voici un guide récapitulatif pour comprendre et utiliser les ESM dans Node.js.

---

## Activer les ESM dans Node.js

1. **Utiliser un fichier `.mjs`** :
   - Si votre fichier a une extension `.mjs`, Node.js le traite automatiquement comme un module ESM.

2. **Configurer `package.json`** :
   - Si vous utilisez des fichiers avec l'extension `.js`, ajoutez le champ suivant dans votre fichier `package.json` :

     ```json
     {
         "type": "module"
     }
     ```

   - Cette configuration indique à Node.js que tous les fichiers `.js` dans ce projet utilisent la syntaxe ESM.

---

## Importation avec `import`

### Syntaxe de base

```javascript
import nomModule from 'chemin/vers/module';
```

- **Exemple :** Importer une bibliothèque tierce :

  ```javascript
  import express from 'express';
  const app = express();
  ```

- **Exemple :** Importer un fichier local :

  ```javascript
  import utils from './utils.js';
  ```

### Importations nommées

Si un module exporte plusieurs éléments, vous pouvez importer uniquement ceux dont vous avez besoin :

```javascript
import { fonctionA, fonctionB } from './module.js';
```

### Renommer une importation

Vous pouvez renommer les éléments importés :

```javascript
import { fonctionA as aliasA } from './module.js';
```

### Importation globale de tout un module

```javascript
import * as moduleComplet from './module.js';
console.log(moduleComplet.fonctionA());
```

---

## Exportation avec `export`

### Exportation par défaut

Un module peut exporter un élément principal par défaut :

```javascript
// module.js
export default function saluer() {
    console.log('Bonjour !');
}
```

Puis, importez-le :

```javascript
import saluer from './module.js';
saluer();
```

### Exportations nommées

Vous pouvez exporter plusieurs éléments à partir d'un module :

```javascript
// module.js
export const PI = 3.14159;
export function calculerAire(rayon) {
    return PI * rayon * rayon;
}
```

Puis, importez-les :

```javascript
import { PI, calculerAire } from './module.js';
console.log(calculerAire(5));
```

### Exportation combinée

Vous pouvez combiner les exportations par défaut et nommées :

```javascript
// module.js
export const PI = 3.14159;
export default function calculerDiametre(rayon) {
    return 2 * rayon;
}
```

---

## Points importants à noter

1. **Chemins relatifs** :
   - Les importations locales doivent inclure le chemin complet avec une extension (par exemple, `./module.js`).

2. **Incompatibilité avec `require()`** :
   - Vous ne pouvez pas utiliser `require()` dans un fichier ESM.
   - Si vous avez besoin de modules CommonJS dans un projet ESM, utilisez l'importation dynamique :

     ```javascript
     const module = await import('module');
     ```

3. **Modules Node.js intégrés** :
   - Les modules intégrés comme `fs` ou `http` peuvent être importés directement :

     ```javascript
     import fs from 'node:fs';
     ```

---

## Comparaison rapide entre ESM et CommonJS

| Fonctionnalité         | ESM                             | CommonJS                  |
|------------------------|----------------------------------|---------------------------|
| Importation            | `import`                       | `require()`               |
| Exportation            | `export` / `export default`    | `module.exports`          |
| Syntaxe asynchrone     | Oui                            | Non                       |
| Chargement dynamique   | `import()`                     | Non natif (via hacks)     |

---

## Conclusion

L'adoption des ECMAScript Modules en Node.js modernise la gestion des modules et améliore la compatibilité avec le JavaScript côté client. En suivant cette fiche, vous pouvez facilement structurer votre code en utilisant cette syntaxe standardisée.
