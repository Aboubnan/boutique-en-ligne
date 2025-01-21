# Terminal 🧑‍💻

- Terminal = ligne de commande = *command line interface* (CLI) = *shell*
- Pour interagir avec l'ordinateur en tapant du texte (lignes de commandes)
- Plutôt qu'en cliquant avec la souris dans l'interface graphique habituelle

---

## Contexte d’exécution

Lorsqu’on ouvre un *terminal*, on a quelque chose comme…​

`jean@machine:/home/student$`

Cette ligne se nomme le *prompt*, ou *l'invite de commande* en français

- `jean` = **nom de l'utilisateur** (connecté au système)
- `machine` = **nom de l'hôte** = nom de l'ordinateur
- `/home/student` = **répertoire** dans lequel on se trouve
- `$` = la fin du prompt, ce qui suit sera une commande

---

### Commandes, arguments, options

Les instructions que tu donnes au terminal sont des *commandes* éventuellement suivies d'*arguments* et/ou d'*options*.

Exemple : `ls /home/student -l`

- **Commande** = le job : `ls` *indique qu'on veut lister*

- **Argument** = le sujet du job : `/home/student` *indique quel répertoire on veut lister*

- **Option** = la façon de faire le job : `-l` *indique comment afficher la liste*

---

## Les commandes de base (1/2)

- `pwd` : affiche le chemin du dossier dans lequel on se trouve
- `cd` : se déplacer dans un dossier
- `ls` : lister le contenu d'un dossier
- `mkdir` : créer un dossier
- `rmdir` : supprimer un dossier
- `touch` : créer un fichier
- `rm` : supprimer un fichier

---

## Les commandes de base (2/2)

- `nano` : éditeur de texte qui ouvre le fichier donné en argument  
- `cat` : afficher le contenu du fichier donné en argument
- `clear` : supprimer les lignes actuelement affichées dans le terminal
- `code` : ouvrir dans VSC le dossier spécifié en argument 
- `mv` : déplacer OU renommer

--- 

## Aide intégrée

Si tu ne sais pas comment utiliser une commande, tu peux obtenir de l'aide :

- en tapant `man` suivi du nom de la commande.  
  Exemple : `man ls`

- en tapant le nom de la commande suivie de l'option `--help`  
  Exemple : `ls --help`

--- 

## Auto-complétion

- Taper des lignes de commandes ça peut être fastidieux
- Heureusement on a la touche `Tab` du clavier (tabulation)
- Dans le Terminal, la touche `Tab` permet de compléter
  - Une commande
  - Un argument

-> Pensez à l'utiliser !!!!

--- 

## Les chemins

- `.` = le dossier courant *(celui dans lequel on se trouve)*
- `..` = le dossier parent
- `~` = le dossier utilisateur *(sur vos VM c'est `/home/student`)*
- `/` = la racine du systeme de fichier 

---

## Chemin relatif / chemin absolu 

Exemple :  
Je suis dans `~/Trainers/Sacha` et je veux aller dans `~/Trainers`  

- **Chemin relatif** : on part de là ou on se trouve   
-> je fais `cd ..`

- **Chemin absolu** : on part d'un endroit connu de tous (~ ou /)     
-> je fais `cd ~/Trainers/Sacha`  
-> ou `cd /home/student/Trainers/Sacha`

---

## Et voilà 🎉 !