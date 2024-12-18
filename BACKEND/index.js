/**
 * Serveur Backend Pokedex
 */

// Définir l'emplacement des fichiers de base de données
const POKEDEX_SRC = "./DATA/pokedex.json";

// Définir un port
const PORT = 5001;

// ************************************************

// Importer les modules nécessaires
const fs = require('fs');
const express = require('express');
const cors = require('cors'); // Importer le package cors
const app = express();
const path = require('path');

// Utiliser le middleware CORS
app.use(cors());

// Charger le fichier Pokedex de manière synchrone
let pokedex = [];
try {
    const data = fs.readFileSync(POKEDEX_SRC, 'utf8');
    pokedex = JSON.parse(data);
} catch (err) {
    console.error(err);
}

// Route pour afficher la page principale
app.get('/', (req, res) => {
    res.json(pokedex);
});

// Route pour renvoyer un Pokémon au hasard
app.get('/hasard', (req, res) => {
    const randomIndex = Math.floor(Math.random() * pokedex.length);
    res.json(pokedex[randomIndex]);
});

// Route pour renvoyer un Pokémon à partir d'un identifiant
app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const pokemon = pokedex.find(p => p.id == id); 
    if (pokemon) {
        res.json(pokemon);
    } else {
        res.status(404).send('Pokémon non trouvé');
    }
});

// Route pour renvoyer un Pokémon à partir d'un nom en français
app.get('/pokemon/name/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const pokemon = pokedex.find(p => p.name.french.toLowerCase() === name);
    if (pokemon) {
        res.json(pokemon);
    } else {
        res.status(404).send('Pokémon non trouvé');
    }
});

// Route pour renvoyer la liste des Pokémon par type
app.get('/pokemon/type/:type', (req, res) => {
    const typeParam = req.params.type.toLowerCase();
    const pokemonList = pokedex.filter(pokemon => 
        pokemon.type.some(type => type.toLowerCase() === typeParam)
    );
    if (pokemonList.length > 0) {
        res.json(pokemonList);
    } else {
        res.status(404).send('Aucun Pokémon trouvé pour ce type');
    }
});

// Route pour renvoyer la liste des Pokémon par HP
app.get('/pokemon/hp/:hp', (req, res) => {
    const hp = req.params.hp;
    const pokemonList = pokedex.filter(pokemon => pokemon.base.HP == hp);
    if (pokemonList.length > 0) {
        res.json(pokemonList);
    } else {
        res.status(404).send('Aucun Pokémon trouvé pour ce HP');
    }
});

// Route pour renvoyer la liste des Pokémon par Attaque
app.get('/pokemon/attack/:attack', (req, res) => {
    const attack = req.params.attack;
    const pokemonList = pokedex.filter(pokemon => pokemon.base.Attack == attack);
    if (pokemonList.length > 0) {
        res.json(pokemonList);
    } else {
        res.status(404).send('Aucun Pokémon trouvé pour cette Attaque');
    }
});

// Route pour renvoyer la liste des Pokémon par Defense
app.get('/pokemon/defense/:defense', (req, res) => {
    const defense = req.params.defense;
    const pokemonList = pokedex.filter(pokemon => pokemon.base.Defense == defense);
    if (pokemonList.length > 0) {
        res.json(pokemonList);
    } else {
        res.status(404).send('Aucun Pokémon trouvé pour cette Defense');
    }
});
// Route pour renvoyer la liste des Pokémon par Vitesse
app.get('/pokemon/speed/:speed', (req, res) => {
    const speed = req.params.speed;
    const pokemonList = pokedex.filter(pokemon => pokemon.base.Speed == speed);
    if (pokemonList.length > 0) {
        res.json(pokemonList);
    } else {
        res.status(404).send('Aucun Pokémon trouvé pour cette Vitesse');
    }
});

// Route pour renvoyer la liste des Pokémon par Sp. Attack
app.get('/pokemon/spattack/:', (req, res) => {
    const spattack = req.params.spattack;
    const pokemonList = pokedex.filter(pokemon => pokemon.base.Sp .Attack == spattack);
    if (pokemonList.length > 0) {
        res.json(pokemonList);
    } else {
        res.status(404).send('Aucun Pokémon trouvé pour cette Vitesse');
    }
});

// Fonction pour convertir l'ID en 3 chiffres
function formatId(id) {
    return id.toString().padStart(3, '0');
}
// Route pour renvoyer les données d'un Pokémon avec le chemin de son image
app.get('/pokemon/images/:id', (req, res) => {
    const id = req.params.id;
    const formattedId = formatId(id); // Utilisation de formatId
    const imageRelativePath = `./FILES/thumbnails/${formattedId}.png`;
    const imagePath = path.join(__dirname, './FILES/images/', `${formattedId}.png`);
    
    // Trouver le Pokémon correspondant
    const pokemon = pokedex.find(p => p.id == id);
    if (pokemon) {
        // Vérifier si le fichier image existe
        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {

                res.json({
                    ...pokemon,
                    image: null,
                    message: 'Image non trouvée'
                });
            } else {

                res.json({
                    ...pokemon,
                    image: imageRelativePath
                });
            }
        });
    } else {
        res.status(404).send('Pokémon non trouvé');
    }
});

// Route pour renvoyer l'image d'un Pokémon à partir de son identifiant
app.get('/pokemon/image/:id', (req, res) => {
    const id = req.params.id;
    const formattedId = formatId(id); // Utilisation de formatId
    const imagePath = path.join(__dirname, './FILES/images/', `${formattedId}.png`);
    
    // Vérifier si le fichier image existe
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {

            res.status(404).send('Image non trouvée');
        } else {
            // Si l'image existe, on l'envoie en réponse
            res.sendFile(imagePath);
        }
    });
});


// Lancement du serveur et attente
app.listen(5001, '0.0.0.0', () => {
  console.log('Server is running on port 5001');
});
