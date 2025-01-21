# Exercice Terminal Pokemon

Si besoin tu peux aller voir le [recap du cours](./recap-terminal.md) ;) 

Avant tout : 

- Ouvre un terminal
- Vas dans le répertoire `/var/www/html`

## 1. Création de répertoires

- Tout d'abord, on veut créér un dossier pour notre projet.  
  Créé un répertoire appelé `PokemonProject` et déplace toi à l'intérieur de ce nouveau dossier.
  <details>
    <summary>solution</summary>

    ```bash
    # création du dossier
    mkdir PokemonProject

    # on se déplace dedans
    cd PokemonProject
    ```

  </details>  

- On veut référencer les Pokemons et les dresseurs de Pokemon dans des dossiers.  
  Crée 2 répertoires appelés `Pokemons` et `Trainers`. Tu peux ensuite lister le répertoire courrant pour vérifier que tes 2 répertoires sont bien là.
  <details>
    <summary>solution</summary>

    ```bash
    # création des dossiers
    mkdir Pokemons Trainers

    # on liste le dossier courrant pour vérifier que nos répertoires soient présents
    ls
    ```

  </details>

- Sacha, Flora et Paul s'enregistrent en tant que dresseurs de Pokémons !  
  Dans le répertoire `Trainers` : crée 3 répertoires appelés `Sacha`, `Flora` et `Paul`

  <details>
    <summary>solution</summary>

    ```bash
    # on se déplace dans Trainers
    cd Trainers

    # on créé les dossiers 
    mkdir Sacha Flora Paul
    ```

  </details> 

## 2. Création de fichiers 

- Nous répertorions 4 premiers Pokemons :
  Dans le répertoire `Pokemons` : crée 4 fichiers `pikachu.txt`, `evoli.txt`, `rondoudou.txt` et `carapuce.txt`

  <details>
    <summary>solution</summary>

    ```bash
    # on se déplace du dossier Trainers au dossier Pokemons
    cd ../Pokemons

    # on créé les 4 fichiers
    touch pikachu.txt evoli.txt rondoudou.txt carapuce.txt

    # on vérifie que nos 4 fichiers sont là en listant le contenu du répertoire Pokemon
    ls
    ```

  </details> 

## 3. Lecture, écriture de fichiers

- Pikachu gagne des attaques !
  Ecris *'Attaques : Thunder shock, Spark'* dans le fichier `pikachu.txt`
  <details>
    <summary>solution</summary>

    ```bash 
    # Ouvrir le fichier dans l'éditeur nano
    nano pikachu.txt
    ```
    -> on tape le texte 'Attaques : Thunder shock, Spark'  
    -> on fait `Crtl + X` pour sortir  
    -> on tape `Y` pour sauvegarder  
    -> on appuie sur `Entrée` pour quitter  

  </details> 

- Afficher le contenu du fichier `pikachu.txt` pour vérifier ses attaques mais sans rentrer dans l'éditeur de texte.
  <details>
    <summary>solution</summary>

    ```bash
    cat pikachu.txt
    ```

  </details> 

## 4. Déplacement de fichiers

- Sacha a attrapé Pikachu !  
  Déplace le fichier `pikachu.txt` dans le répertoire `Sacha`
  <details>
    <summary>solution</summary>

    ```bash
    # On copie le fichier pikachu depuis le dossier courrant vers le dossier Sacha
    mv pikachu.txt ../Trainers/Sacha
    ```

  </details> 

- Flora a attrapé Evoli !  
  Va dans le dossier Flora puis rappatrie y le fichier `evoli.txt` *qui est actuelement dans le dossier `Pokemon`*
  <details>
    <summary>solution</summary>

    ```bash
    # On se déplace dans le dossier Flora
    cd ../Trainers/Flora
    # On copie le fichier evoli depuis le dossiers Pokemons vers le dossier courrant
    mv ../../Pokemons/evoli.txt .
    ```

  </details> 

## 5. Renommage de fichiers

- Evoli évolue en Aquali !  
  Renomme le fichier `evoli.txt` en `aquali.txt`
  <details>
    <summary>solution</summary>

    ```bash
    mv evoli.txt aquali.txt
    ```

  </details>

## 6. Suppression de dossiers et fichiers

- Paul abandonne sa carrière de dresseur de Pokémon !  
  Supprime le dossier `Paul`
  <details>
    <summary>solution</summary>

    ```bash
    # on se déplace dans le dossier des dresseurs
    cd ..

    # on supprime le répertoire Paul
    rmdir Paul
    ```

  </details>

- Rondoudou s'échappe du monde des Pokemons pour aller au pays des bonbons !  
  Supprime le fichier `rondoudou.txt`
  <details>
    <summary>solution</summary>

    ```bash
    # solution 1 : 
    # on se déplace dans le dossier Pokemons
    cd ../Pokemons
    # puis on supprime le fichier rondoudou
    rm rondoudou.txt

    # solution 2 : on reste dans le dossier Trainers
    # et on supprime le fichier rondoudou à distance
    # en précisant son chemin
    rm ../Pokemons/rondoudou.txt
    ```

  </details>
