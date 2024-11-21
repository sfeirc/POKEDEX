# Pokedex - Votre Collection Pokémon 🕹️

<div align="center">

![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

---

## 📖 Table des Matières

- [✨ Introduction](#-introduction)
- [🎯 Fonctionnalités](#-fonctionnalités)
- [⚙️ Prérequis](#️-prérequis)
- [🚀 Installation](#-installation)
- [💻 Usage](#-usage)
  - [Démarrer le Backend](#démarrer-le-backend)
  - [Démarrer le Frontend](#démarrer-le-frontend)
- [🌐 Routes API](#-routes-api)
- [🔍 Exemples](#-exemples)
- [🛠️ Collection Postman](#-collection-postman)
- [🤝 Contribuer](#-contribuer)
- [📄 Licence](#-licence)
---



## ✨ Introduction

Ce projet est une application web complète qui permet aux utilisateurs de :

- 🔎 **Rechercher des Pokémon** par nom, ID, type, et statistiques.
- 📄 **Afficher des informations détaillées** sur chaque Pokémon, y compris leur image, types, et statistiques.
- 🎲 **Obtenir un Pokémon aléatoire** pour découvrir de nouvelles créatures.

Le backend est construit avec **Node.js** et **Express**, servant des données à partir d'un fichier JSON et des images Pokémon. Le frontend est une interface utilisateur intuitive créée avec **HTML**, **CSS**, et **JavaScript**, offrant une expérience interactive.

---

## 🎯 Fonctionnalités

- **Recherche Polyvalente** : Recherchez des Pokémon par nom, ID, type, HP, attaque, défense, attaque spéciale, et vitesse.
- **Affichage Dynamique** : Affichez des cartes Pokémon avec leur image, nom, types, et statistiques.
- **Pokémon Aléatoire** : Découvrez un nouveau Pokémon à chaque fois avec la fonction de sélection aléatoire.
- **Interface Conviviale** : Une interface utilisateur claire et esthétique pour une expérience agréable.
- **Backend Robuste** : Un serveur Express gérant plusieurs routes API pour fournir les données nécessaires.

---

## ⚙️ Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- ![Node.js Icon](https://img.icons8.com/color/20/000000/nodejs.png) **Node.js** (version 12 ou supérieure)
- ![npm Icon](https://img.icons8.com/color/20/000000/npm.png) **npm** (gestionnaire de paquets Node.js)

---

## 🚀 Installation

Suivez ces étapes pour installer et exécuter le projet localement.

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/votre-utilisateur/pokedex.git
   cd pokedex
   ```

2. **Installer les dépendances du backend**

   ```bash
   cd BACKEND
   npm install
   ```

3. **Placer les fichiers de données**

   - Assurez-vous que le fichier `pokedex.json` est placé dans le dossier `DATA` du backend.
   - Assurez-vous que les images des Pokémon sont dans le dossier `FILES/thumbnails`.

4. **Retourner au répertoire racine**

   ```bash
   cd ..
   ```

---

## 💻 Usage

### Démarrer le Backend

1. **Naviguer vers le dossier du backend**

   ```bash
   cd BACKEND
   ```

2. **Lancer le serveur**

   ```bash
   node index.js
   ```

   Vous devriez voir le message :

   ```
   Le serveur Pokedex est sur le port 5001
   ```

### Démarrer le Frontend

1. **Ouvrir le fichier `index.html`**

   - Naviguez vers le dossier `FRONTEND`.
   - Ouvrez `index.html` dans votre navigateur préféré.

   *Astuce : Pour une meilleure expérience, utilisez un serveur local (par exemple, avec l'extension VSCode Live Server) pour éviter les problèmes liés à la politique de sécurité du navigateur.*

---

## 🌐 Routes API

Le backend fournit plusieurs routes pour interagir avec les données des Pokémon :

- **Obtenir tous les Pokémon**

  ```
  GET http://localhost:5001/
  ```

- **Obtenir un Pokémon au hasard**

  ```
  GET http://localhost:5001/hasard
  ```

- **Obtenir un Pokémon par ID**

  ```
  GET http://localhost:5001/pokemon/:id
  ```

- **Obtenir un Pokémon par nom**

  ```
  GET http://localhost:5001/pokemon/name/:name
  ```

- **Obtenir des Pokémon par type**

  ```
  GET http://localhost:5001/pokemon/type/:type
  ```

- **Obtenir des Pokémon par HP**

  ```
  GET http://localhost:5001/pokemon/hp/:hp
  ```

- **Obtenir des Pokémon par Attaque**

  ```
  GET http://localhost:5001/pokemon/attack/:attack
  ```

- **Obtenir des Pokémon par Défense**

  ```
  GET http://localhost:5001/pokemon/defense/:defense
  ```

- **Obtenir des Pokémon par Attaque Spéciale**

  ```
  GET http://localhost:5001/pokemon/spattack/:spattack
  ```

- **Obtenir des Pokémon par Vitesse**

  ```
  GET http://localhost:5001/pokemon/speed/:speed
  ```

- **Obtenir l'image d'un Pokémon par ID**

  ```
  GET http://localhost:5001/pokemon/image/:id
  ```

---

## 🔍 Exemples

- **Rechercher Pikachu par nom**

  ```
  GET http://localhost:5001/pokemon/name/pikachu
  ```

- **Obtenir tous les Pokémon de type "Fire"**

  ```
  GET http://localhost:5001/pokemon/type/fire
  ```

- **Trouver les Pokémon avec une Attaque Spéciale de 100**

  ```
  GET http://localhost:5001/pokemon/spattack/100
  ```

---


## 🛠️ Collection Postman

Pour tester les requêtes API, une collection Postman est disponible. Vous pouvez l'importer et l'utiliser pour effectuer des tests facilement.

1. **Télécharger la collection Postman**

   [Collection Postman Pokedex](path_to_postman_collection.json)

2. **Importer dans Postman**

   - Ouvrez Postman.
   - Cliquez sur "Importer".
   - Sélectionnez le fichier téléchargé.

3. **Tester les requêtes**

   Utilisez les requêtes prédéfinies dans la collection pour interagir avec l'API.

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet :

1. **Forkez le dépôt**

2. **Créez une branche pour votre fonctionnalité**

   ```bash
   git checkout -b fonctionnalite/ma-nouvelle-fonctionnalite
   ```

3. **Commitez vos changements**

   ```bash
   git commit -m 'Ajout de ma nouvelle fonctionnalité'
   ```

4. **Poussez vers la branche**

   ```bash
   git push origin fonctionnalite/ma-nouvelle-fonctionnalite
   ```

5. **Ouvrez une Pull Request**

---

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).

---

# Bonne exploration ! 🚀