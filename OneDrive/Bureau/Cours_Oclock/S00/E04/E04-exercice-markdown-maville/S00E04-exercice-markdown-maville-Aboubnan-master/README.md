# Ma ville, ma région, en local

## Objectifs

- Coder en local (sur votre VM, donc)
- Utiliser VS Code
- Utiliser le terminal
- Coder en Markdown
- Comprendre la notion de liens (entre les pages)
- Prévisualiser les pages en local
- Naviguer sur les pages depuis le dépôt GitHub
- ---
- **Bonus** : naviguer sur les pages en HTML, sur un vrai site Web, via *GitHub Pages*.

## Attendus

- un mini-site de 4 pages en Markdown
  - `index.md` avec une description rapide et les liens vers les 3 autres pages
  - `ma-ville.md` avec la présentation de ta ville actuelle, et un lien de retour vers l'accueil
  - `mon-departement.md` pareil, mais avec le département de ta ville
  - `ma-region.md` pareil, mais avec la région de ta ville
  
:pencil: Tu remarqueras qu'on évite les espaces et les accents dans les noms de fichiers, c'est trop sujet à erreurs/bugs.

:pencil: Dans ces pages, tu peux mettre les informations que tu souhaites (nombre d'habitants, lieux à visiter, sorties à faire, etc.) => pense à utiliser Wikipédia, Google Images, etc.

## Etapes

### #1 - Cloner le dépôt en local

On va rappeler la procédure ici :

- **copier le lien SSH** source du dépôt (attention, c'est pas dans la barre d'adresse, mais en cliquant sur le bouton "Code" puis en sélectionnant l'onglet SSH)
- **ouvrir un terminal** dans le Téléporteur
- **se déplacer** dans le bon dossier, où l'on stocke nos sources
- **cloner le dépôt** à cet endroit
- **se déplacer** dans le sous-dossier créé
- **ouvrir VS Code depuis le dossier courant**

<details><summary>détail des commandes à exécuter</summary>

**ouvrir un terminal**

```bash
# se déplacer dans le bon dossier, où l'on stocke nos sources
cd /var/www/html
# correspond au dossier "html" sur le Bureau du téléporteur

# cloner le dépôt à cet endroit
# attention, ce n'est pas la bonne URL, il faut coller celle fournie par GitHub
git clone git@github.com:O-clock-PROMO-A-REMPLACER/exercice-markdown-maville-MON-PSEUDO-A-REMPLACER.git

# se déplacer dans le sous-dossier créé
# attention, ce n'est pas le bon nom de dossier, le nom du dossier est le même que le nom du dépôt
# => cd exercice-markdown-maville-MON-PSEUDO-A-REMPLACER
# astuce, colle la commande ci-dessous puis appuie sur la touche "Tab" (à gauche de la touche A)
cd exercice-markdown-maville
# "Tab" va lancer l'autocomplétion du nom du dossier (donc le reste du nom du dossier va s'ajouter tout seul)
# tu pourras ensuite valider en appuyant sur la touche "Entrée"

# ouvrir VS Code depuis le dossier courant
code .
```

</details>

### #2 - Créer/modifier les fichiers

C'est le moment de coder, et tout se passe dans le sous-dossier `docs`. Le contenu est libre, mais tu peux reprendre ce que tu avais dans l'exercice en S00E02.

Si tu veux de l'aide sur la syntaxe _Markdown_, pas de soucis, la documentation est là pour ça :

- tu peux te référer à [cette documentation](https://www.markdownguide.org/basic-syntax/)
- ou ce [cheatsheet](https://www.markdownguide.org/cheat-sheet/) (littéralement *antisèche, feuille de triche* en anglais)

On te suggère de mettre les mots importants en gras, et le nom des personnes en italique :wink:

Tu peux ajouter des images directement depuis le Web ou en téléchargeant l'image dans ton dossier, et dans tous les cas les positionner dans le contenu avec la même syntaxe Markdown pour les images.

### #3 - Envoyer les sources sur GitHub

Maintenant que nos pages Markdown ont été créées, on va les envoyer sur GitHub afin de : 

- les mettre "à l'abri"
- pouvoir les visualiser directement en ligne

Pour cela, il faut faire un `push` :wink:

<details><summary>détail des commandes à exécuter pour <code>push</code></summary>

**Ouvrir le terminal VSCode**

```bash
# normalement, tu es dans le dossier racine du dépôt

# afficher les fichiers modifiés mais non préparés, et les fichiers préparés (à la future sauvegarde)
# à ce stade, tous les fichiers sont "non préparés"
git status

# ajouter tous les fichiers précis à la préparation (stage)
git add .

# afficher les fichiers modifiés mais non préparés, et les fichiers en préparation
# à ce stade, désormais, tous les fichiers sont préparés (staged)
git status

# créer une sauvegarde / et lui donner une description de ce qui a été fait, par ex. :
git commit -m "ajout des pages index et ville"

# envoyer la ou les sauvegarde(s) vers le remote repository (ici GitHub)
git push

# afficher les fichiers modifiés mais non préparés, et les fichiers préparés (à la future sauvegarde)
# à ce stade, git devrait afficher qu'il n'y a rien à sauvegarder "nothing to commit, working tree clean"
git status
```
</details>

---

Naviguer sur votre dépôt GitHub (dans le dossier `docs`) pour admirer vos pages :tada:

Complétez les pages, add/commit/push à chaque étape "utile", recommencez jusqu'à ce que vous soyez satisfait de votre contenu :blush:

### Bonus

Et si on créait un vrai site Web à partir de ces pages Markdown ?

=> [Ca se passe par ici](./README_BONUS.md)
