# Codons notre première ligne en HTML !

## C'est quoi le HTML ?

Le HTML, c'est le langage utilisé pour décrire le contenu d'une page web. Concrètement, créer un fichier HTML, cela signifie créer un fichier au format texte dans lequel on va utiliser une grammaire bien précise pour décrire de l'information. On va pouvoir préciser le contenu de l'information mais également le type d'information, qu'on appelle « sémantique ».

Par exemple, si on veut un **titre de niveau I**, dont le contenu texte est "Bienvenue", voilà à quoi ressemblera le code html :
```html
<h1>Bienvenue</h1>
```

Dans la grammaire HTML, la _balise_ `<h1>` signifie **titre de niveau I**. Si on ouvre cette page web dans un navigateur web tel que Google Chrome, le navigateur affichera ce texte. **Sans plus de précision de notre part**, le navigateur se base sur la sémantique pour choisir comment afficher le texte. Dans notre cas, puisqu'il s'agit d'un titre, on peut imaginer que le navigateur va choisir de l'afficher en plus gros.


## Google Chrome
« *OK, on fait des pages en HTML. Mais là, ce que je lis, c'est en HTML ?* »

Tout à fait, la page que vous lisez actuellement, c'est du HTML ! Pour vous en convaincre, vous pouvez faire un clique-droit, puis sélectionner "afficher le code source de la page". Vous pouvez également vous habituer au raccourci : `ctrl` + `u` (ou `option` + `cmd` + `u` si vous êtes sur mac). Cela vous permet de visualiser le code HTML qui a permis d'afficher cette page web.

Si vous êtes dubitatifs, essayez donc de faire une recherche (`ctrl` + `f` ou `cmd` + `f`), et chercher « dubitatifs », vous tomberez sur le HTML qui constitue ce paragraphe :smiley:

<kbd>![Code source](images/code-source.png)</kbd>

Cela va donc nous arriver très souvent de vouloir mettre le nez dans Chrome quand on créera nos pages web. Pour nous simplifier la vie, Google Chrome dispose d'un outil bien plus pratique pour interagir avec le code qu'on découvrira plus en détail pendant la formation : les DevTools. Pour avoir un aperçu vous pouvez faire un clique-droit, puis sélectionner "Inspecter" (ou `F12`).

<kbd>![Dev Tools](images/dev-tools.png)</kbd>


## Notre première page
Pour commencer, rien de mieux qu'un exemple simple à découvrir et à modifier !
Ce repo GitHub contient un fichier html. Clonez ce repository chez vous comme on l'a vu en cours.

Ouvrez le fichier `html/index.html` à l'aide d'un double-clic (si vous êtes avec l'exporateur de fichier) ou la commande `google-chrome html/index.html` (si vous êtes dans le terminal). Le fichier va s'ouvrir dans Google Chrome.

<kbd>![Bienvenue](images/bienvenue.png)</kbd>

Allons modifier le code HTML !


## Visual Studio Code
Rappelons-nous : nos pages web sont codées via des fichiers textes. Un fichier dans lequel on a défini un contenu avec de la grammaire HTML. Pour aller modifier un fichier texte, il nous faut un **éditeur de texte**, c'est-à-dire, un logiciel capable d'ouvrir un fichier et nous permettre d'en modifier le contenu.

Pour cela, nous allons utiliser **Visual Studio Code**. Il s'agit d'un éditeur de texte créé tout particulièrement pour écrire du code.

« _Pourquoi Visual Studio Code ?_ »
Des éditeurs de texte, il y en a plein. Visual Studio Code, ou **VSC** pour les intimes, est simplement l'un d'entre eux. C'est l'éditeur que nous recommandons pour la formation, mais c'est aussi l'éditeur que la Team O’clock utilise au quotidien pour développer. C'est un éditeur léger, simple à utiliser, cross-platform, open-source, extensible, customisable. Tous les ingrédients qui en font un choix de prédilection.

Bref, revenons à notre page HTML.

On va l'ouvrir dans VSC, à l'aide d'un `clic-droit > ouvrir avec`. On peut aussi ouvrir VSC d'abord, puis ouvrir le fichier HTML avec `Fichier > Ouvrir un fichier`.

<kbd>![VSC](images/vsc.png)</kbd>

On peut aussi ouvrir le dossier en entier. On fera souvent ça pendant la formation, pour nous permettre d'ouvrir facilement tous les fichiers de nos projets dans VSC. Pour cela, il faut choisir `Fichier > Ouvrir le dossier…` (les libellés peuvent changer selon la version de VSC et votre système d'exploitation).

<kbd>![VSC folder](images/vsc-folder.png)</kbd>

Pratique, VSC reconnaît qu'il s'agit de HTML, et va venir nous mettre automatiquement un peu de couleur dans tout ce bazar ! Nous reviendrons sur tout ça en détail la semaine prochaine. Mais on peut déjà remarquer quelques petites choses…

Il ne s'agit pas de tout comprendre du premier coup ; vous verrez, ça sera le cas de nombreuses fois dans la formation. Il est même fort probable que chaque jour, vous vous sentiez largué. C'est **tout à fait normal**. Le code, c'est souvent plein de concepts en même temps. On ne comprend jamais tout du premier coup ! Mais surtout, pas de panique, même quand vous vous croyez à l'Ouest, vous assimilez un tas d'infos sans vous en rendre compte. :relieved:

Bref, nous disions. On peut remarquer qu'un fichier HTML :
* commence toujours par un `doctype`. Ça permet d'indiquer dans quelle version du langage HTML la page va être écrite.

* comprend une balise `<html>` qui va tout englober. C'est l'élément racine de toute page HTML. Cherchez pas, c'est comme ça !

* comprend une balise `<body>` qui est située à l'intérieur de la racine `<html>`. Cette balise contient les données principales : le corps de la page, c'est-à-dire, son contenu !

* comprend une balise `<head>` qui est également située à l'intérieur de la racine `<html>`, et que l'on vient placer juste avant le `<body>`. On mettra dedans les métadonnées, c'est-à-dire non pas le contenu, mais des données supplémentaires sur le document. Dans notre exemple, on vient donner un titre au document. Puisqu'il est dans le `<head>`, ce n'est pas un contenu, c'est juste de l'information. Il ne sera donc pas affiché dans la page web. En revanche, les informations du `<head>` sont utilisés par les navigateurs. Dans la plupart des navigateurs, le `<title>` est utilisé pour le texte qui sera affiché dans l'onglet du navigateur. On a également une balise `<link>` qui permet de faire un lien (logique !) vers un autre document : ici, une feuille de style (CSS)…

Arf, je vous disais qu'il y avait parfois beaucoup d'infos d'un coup…


## On modifie !
Allez, on va modifier cette page pour voir ce que ça donne ! :blush:

Modifiez la ligne 11 comme ci-dessous :
```html
<h1>Bienvenue chez O’clock</h1>
```

Enregistrez le fichier, avec `ctrl` + `s` (ou `cmd` + `s`). Vous pouvez aussi faire `Fichier > Enregistrer`, mais vu le nombre de fois où vous allez enregistrer des fichiers dans votre vie de développeur, je vous conseille de vous faire au raccourci clavier !

Retournons dans Google Chrome, et rechargeons la page. Là aussi, on peut se faire au raccourci : `F5` ou `ctrl` + `r` ou encore `cmd` + `r`.

Et bim !

<kbd>![Code source](images/bienvenue-oclock.png)</kbd>

Vous avez codé votre première ligne HTML ! :scream:

C'est aussi simple que ça le dev. Non, sans déconner, pendant 5 mois, on va écrire des trucs dans VSC, et ça va faire des trucs géniaux. Bon là, on a juste rajouté un texte. C'est normal, c'est le premier jour. Que dis-je, ce n'est même pas encore le premier jour ! Mais dès la première semaine de formation, vous allez mettre en place votre premier site ! Et imaginez-vous que dans 5 mois, vous présenterez fièrement un projet complet !

Revenons dans le présent. Nous avons modifié le `<h1>`, c'est le **titre de niveau I**. Comment ça, vous le saviez déjà ?!

Il existe également d'autres titres, jusqu'au niveau 6 : `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`. En dessous, nous avons un `<p>`, une balise qui nous permet de décrire **un paragraphe de texte**.


## Encore ?
Allez, soyons fous. Rajoutons un **titre de niveau II** juste après notre `<h1>`, avec le contenu que vous voulez. Je vous laisse deviner ce qu'il faut écrire…

<kbd>![Code source](images/bienvenue-oclock-formation.png)</kbd>

Magique !
Voici le code qu'il fallait écrire pour obtenir cet affichage :

```html
<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<!-- titre de la page - titre présent dans l'onglet -->
		<title>Ma première page !</title>
		<link rel="stylesheet" href="../css/style.css" />
	</head>
	<body>
		<!-- titre de niveau 1 -->
		<h1>Bienvenue chez O’clock</h1>
		<!-- titre de niveau 2 -->
		<h2>Formation développeur web</h2>
		<!-- paragraphe de texte -->
		<p>Voici la première page que vous allez créer. Ouais, enfin, modifier. Mais bon, ne charriez pas, c'est déjà pas mal ! Un voyage de mille lieues commence toujours par un premier pas.</p>
	</body>
</html>
```
Regardez un peu ce code, vous avez noté les `<!-- ... -->` ? Ce sont des commentaires. Les commentaires sont extrêmement pratiques. C'est le moyen idéal pour s'y retrouver et pour organiser votre code (fonctionnement, information, rappel, ...). Pas de panique, ce n'est pas affiché dans le résultat du navigateur. Abusez-en.

Vous avez sans doute remarqué que notre `<h2>` est coloré en vert. Pourtant, nous n'avons rien dit de particulier dans notre code HTML pour indiquer au navigateur de colorer ce titre en vert. D'ailleurs, nous n'avons pas non plus précisé que notre contenu devait être centré par exemple. C'est normal ?

C'est normal. Le HTML sert à décrire **le contenu** uniquement. Il n'est pas utilisé pour décrire **la présentation**. Pour cela, on utilisera un autre langage, le CSS, qui permettra de décrire uniquement la présentation, sans décrire le contenu. On appelle ça la séparation des concepts, ou **separation of concerns** en anglais : on utilise des fichiers différents (HTML ≠ CSS) pour des logiques différentes (contenu ≠ présentation).

**C'est très chouette comme idée**, car ça nous permet d'avoir des fichiers facilement utilisables et modifiables. On veut changer le contenu ? Il suffit de changer le HTML, on ne change rien au CSS. Aussi, on pourrait avoir deux documents HTML différents pointant **vers le même fichier CSS** : on définit une seule fois le style, et on peut l'appliquer sur autant de pages que l'on veut. Pratique !

## Encore encore ?

Grâce à la séparation des concepts, on peut aussi changer la présentation d'une page sans toucher au contenu. Ça tombe bien, un étudiant de talent nous a fourni une proposition de design pas piquée des hannetons. Vous voulez voir à quoi ça ressemble ? Eh bien on va aller tester ça.

Vous vous souvenez de la ligne qui nous permettait de dire qu'on voulait utiliser le fichier `style.css` ? Notre artiste a mis sa proposition dans le fichier "new-design.css" ; à vous d'éditer le HTML au bon endroit pour que ce soit désormais ce fichier-là qui soit utilisé pour la présentation de notre page !

Magnifique :heart_eyes: :laughing:

Voici le code qu'il fallait écrire pour voir le design proposé :
<details>

```html

<!doctype html>
<html>
 <head>
	 <meta charset="utf-8" />
	 <!-- titre de la page - titre présent dans l'onglet -->
	 <title>Ma première page !</title>
	 <link rel="stylesheet" href="../css/new-design.css" />
 </head>
 [...]

```

Eh oui, il suffisait d'une ligne à modifier !
</details>

Au passage, remarquez à quel point le navigateur est intransigeant. Une faute d'orthographe, un oubli de la partie "../css/" avant le nom du fichier... et patatras, tout casse ! De même, il est _sensible à la casse_ - ça ne veut pas dire qu'il est fragile, mais qu'il fait la distinction entre "new-Design", "NEW-DESIGN" et "new-design" qui sont trois choses très différentes pour lui.

Alors petit conseil pour quand vous commencerez à coder, et pour toute la suite de la formation : restez bien attentifs aux détails. La rigueur nécessaire à un développeur peut sembler naturelle à certains, mais en déroutera plus d'un. Alors on se relit, plutôt deux fois qu'une, et on traque les petits oublis :)

## Pour aller plus loin
Si vous voulez approfondir :
* Allez donc voir le fichier `css/style.css`, qui contient le code permettant d'obtenir l'affichage que l'on voit dans Chrome.

* Allez jeter un oeil dans l'inspecteur d'éléments de Chrome, cliquez sur une balise, et vous apercevrez à droite du panneau HTML, un panneau affichant le CSS qui s'applique sur cette balise. On peut même désactiver une propriété CSS en direct dans Chrome !

* Enfin, pour en savoir plus sur tout ça, je ne saurais vous recommander autre chose que le valeureux **Mozilla Developer Network**, qui contient une documentation très détaillée et qui fait office de référence en la matière :
  * https://developer.mozilla.org/fr/docs/Web/HTML
  * https://developer.mozilla.org/fr/docs/Web/CSS


_That's all, folks!_

Team O’clock.
