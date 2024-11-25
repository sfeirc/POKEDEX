# Pokedex - Collection Pokémon 🕹️

<div align="center">


![Node.js Badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Three.js Badge](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Chart.js Badge](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Font Awesome Badge](https://img.shields.io/badge/Font%20Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

</div>

---

## 📖 Table des Matières

- [✨ Introduction](#-introduction)
- [🎯 Fonctionnalités](#-fonctionnalités)
- [⚙️ Prérequis](#%EF%B8%8F-prérequis)
- [🚀 Installation](#-installation)
- [💻 Usage](#-usage)
  - [Démarrer le Backend](#démarrer-le-backend)
  - [Démarrer le Frontend](#démarrer-le-frontend)
- [🌐 Routes API](#-routes-api)
- [🔍 Exemples](#-exemples)
- [🖼️ Aperçu du Projet](#-aperçu-du-projet)
- [🛠️ Collection Postman](#%EF%B8%8F-collection-postman)
- [🤝 Contribuer](#-contribuer)
- [📄 Licence](#-licence)

---

## ✨ Introduction

Bienvenue dans **Pokedex** 🕹️, votre application web ultime pour explorer le monde des Pokémon ! Plongez dans une expérience interactive riche en fonctionnalités et en animations.

Ce projet est une application web complète qui permet aux utilisateurs de :

- 🔎 **Rechercher des Pokémon** par nom, ID, type, et statistiques.
- 📊 **Afficher des informations détaillées** sur chaque Pokémon, y compris leur image, types, et statistiques avec des graphiques dynamiques.
- 🎲 **Obtenir un Pokémon aléatoire** pour découvrir de nouvelles créatures.
- 🌗 **Basculez entre les modes clair et sombre** pour une expérience visuelle optimale.
- 🌀 **Profitez d'animations 3D avancées** avec Three.js pour un arrière-plan immersif.

Le backend est construit avec **Node.js** et **Express**, servant des données à partir d'un fichier JSON et des images Pokémon. Le frontend est une interface utilisateur intuitive créée avec **HTML**, **CSS**, et **JavaScript**, offrant une expérience interactive et visuellement captivante.

---

## 🎯 Fonctionnalités

- **Recherche Polyvalente** : Recherchez des Pokémon par nom, ID, type, HP, attaque, défense, attaque spéciale, et vitesse.
- **Affichage Dynamique** : Affichez des cartes Pokémon avec leur image, nom, types, et statistiques présentées sous forme de graphiques radar interactifs.
- **Pokémon Aléatoire** : Découvrez un nouveau Pokémon à chaque fois avec la fonction de sélection aléatoire.
- **Interface Conviviale et Moderne** : Une interface utilisateur esthétique avec des animations fluides, des transitions, et un design responsive.
- **Mode Sombre/Clair** : Basculez entre les thèmes pour un confort visuel adapté à vos préférences.
- **Animations 3D Avancées** : Un arrière-plan animé en 3D grâce à Three.js pour une immersion totale.
- **Filtrage et Tri** : Filtrez et triez les Pokémon selon différents critères pour affiner votre recherche.

---

## ⚙️ Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- ![Node.js Icon](https://img.icons8.com/color/20/000000/nodejs.png) **Node.js** (version 12 ou supérieure)
- ![npm Icon](https://img.icons8.com/color/20/000000/npm.png) **npm** (gestionnaire de paquets Node.js)
- Un navigateur moderne (Chrome, Firefox, Edge, etc.)

---

## 🚀 Installation

Suivez ces étapes pour installer et exécuter le projet localement.

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/sfeirc/POKEDEX.git
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

1. **Naviguer vers le dossier du frontend**

   ```bash
   cd ../FRONTEND
   ```

2. **Servir l'application**

   Pour une meilleure expérience et éviter les problèmes liés à la politique de sécurité du navigateur, servez votre application via un serveur local.

   - **Option 1 : Utiliser Live Server avec Visual Studio Code**

     - Installez l'extension **Live Server**.
     - Ouvrez le dossier `FRONTEND` dans VS Code.
     - Cliquez sur "Go Live" en bas à droite.
     - Votre application sera servie à `http://localhost:5500/` par défaut.

   - **Option 2 : Utiliser un serveur HTTP simple**

     - Si vous avez Python installé, vous pouvez exécuter :

       ```bash
       python -m http.server 8000
       ```

     - Puis accédez à `http://localhost:8000/` dans votre navigateur.

3. **Ouvrir l'application dans le navigateur**

   - Rendez-vous à l'adresse fournie par votre serveur local (par exemple, `http://localhost:5500/`).

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

## 🖼️ Aperçu du Projet

![image](https://github.com/user-attachments/assets/c407f78b-0484-4c8f-9d30-619293508a77)
![image](https://github.com/user-attachments/assets/a82cc9bc-09e9-4265-8ae6-76e3a98b27e3)
![image](https://github.com/user-attachments/assets/7e30eab3-c323-46e3-b27a-571780b07ac6)
![image](https://github.com/user-attachments/assets/b067ad7f-96d8-4a80-a4fb-44ed81fc86e5)

---

## 🛠️ Collection Postman

Pour tester les requêtes API, une collection Postman est disponible. Vous pouvez l'importer et l'utiliser pour effectuer des tests facilement.

1. **Télécharger la collection Postman**

   [Collection Postman Pokedex](pokedex_collection.json)

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

---

## ⭐️ Remerciements

- Merci à tous les contributeurs qui ont aidé à améliorer ce projet.
- Inspiré par l'univers Pokémon, créé par **Nintendo** et **Game Freak**.

---

## 📫 Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter :

- **Email**: clovis.sfeir.cs@gmail.com
- **GitHub**: [sfeirc](https://github.com/sfeirc)

---

## 📚 Ressources

- **Documentation officielle de Node.js**: [nodejs.org](https://nodejs.org/)
- **Documentation de Express.js**: [expressjs.com](https://expressjs.com/)
- **Documentation de Three.js**: [threejs.org](https://threejs.org/)
- **Documentation de Chart.js**: [chartjs.org](https://www.chartjs.org/)

---

## 💡 Astuces

- **Personnalisation** : Vous pouvez modifier les couleurs et les styles dans le fichier `style.css` pour adapter l'apparence à vos préférences.
- **Extension des Fonctionnalités** : N'hésitez pas à ajouter de nouvelles fonctionnalités, comme la comparaison de Pokémon, l'ajout de favoris, etc.
- **Optimisation** : Pour de meilleures performances, assurez-vous que vos images sont optimisées et que votre code est bien structuré.

---

---

# Bonne exploration ! 🚀
