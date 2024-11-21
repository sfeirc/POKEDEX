document.addEventListener('DOMContentLoaded', () => {
    const BACKEND_URL = 'http://localhost:5001';
    const pokemonContainer = document.getElementById('pokemon-container');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const randomButton = document.getElementById('random-button');
    const searchTypeSelect = document.getElementById('search-type');

    // Fonction pour récupérer et afficher un Pokémon au hasard
    const fetchRandomPokemon = () => {
        fetch(`${BACKEND_URL}/hasard`)
            .then(response => response.json())
            .then(data => {
                displayPokemon([data]);
            })
            .catch(error => console.error('Erreur:', error));
    };

    // Fonction pour récupérer et afficher les Pokémon en fonction du critère
    const fetchPokemon = (searchType, query) => {
        let url = '';
        switch (searchType) {
            case 'name':
                url = `${BACKEND_URL}/pokemon/name/${encodeURIComponent(query)}`;
                break;
            case 'id':
                url = `${BACKEND_URL}/pokemon/${encodeURIComponent(query)}`;
                break;
            case 'type':
                url = `${BACKEND_URL}/pokemon/type/${encodeURIComponent(query)}`;
                break;
            case 'hp':
                url = `${BACKEND_URL}/pokemon/hp/${encodeURIComponent(query)}`;
                break;
            case 'attack':
                url = `${BACKEND_URL}/pokemon/attack/${encodeURIComponent(query)}`;
                break;
            case 'defense':
                url = `${BACKEND_URL}/pokemon/defense/${encodeURIComponent(query)}`;
                break;
            case 'spattack':
                url = `${BACKEND_URL}/pokemon/spattack/${encodeURIComponent(query)}`;
                break;
            case 'speed':
                url = `${BACKEND_URL}/pokemon/speed/${encodeURIComponent(query)}`;
                break;
            default:
                alert('Type de recherche non valide');
                return;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Aucun Pokémon trouvé');
                }
                return response.json();
            })
            .then(data => {
                // Vérifier si data est un tableau ou un objet
                if (Array.isArray(data)) {
                    displayPokemon(data);
                } else {
                    displayPokemon([data]);
                }
            })
            .catch(error => {
                alert(error.message);
            });
    };

    // Fonction pour afficher les cartes Pokémon
    const displayPokemon = (pokemonList) => {
        pokemonContainer.innerHTML = ''; // Efface les résultats précédents
        pokemonList.forEach(pokemon => {
            const card = document.createElement('div');
            card.classList.add('pokemon-card');

            // Fonction pour formater l'identifiant du Pokémon avec des zéros au début
            function formatId(id) {
                return id.toString().padStart(3, '0');
            }

            // Image du Pokémon
            const img = document.createElement('img');
            const formattedId = formatId(pokemon.id);
            img.src = `../${BACKEND_URL}/FILES/thumbnails/${formattedId}.png`;
            img.onerror = () => {
                img.src = 'placeholder.png'; 
            };
            card.appendChild(img);

            // Informations du Pokémon
            const info = document.createElement('div');
            info.classList.add('pokemon-info');

            const name = document.createElement('h2');
            name.textContent = `${pokemon.name.french} (#${pokemon.id})`;
            info.appendChild(name);

            const typeContainer = document.createElement('div');
            pokemon.type.forEach(type => {
                const typeBadge = document.createElement('span');
                typeBadge.classList.add('type-badge', `type-${type}`);
                typeBadge.textContent = type;
                typeContainer.appendChild(typeBadge);
            });
            info.appendChild(typeContainer);

            // Statistiques de base
            const stats = document.createElement('p');
            stats.innerHTML = `
                PV: ${pokemon.base.HP}<br>
                Attaque: ${pokemon.base.Attack}<br>
                Défense: ${pokemon.base.Defense}<br>
                Attaque Spéciale: ${pokemon.base['Sp. Attack']}<br>
                Défense Spéciale: ${pokemon.base['Sp. Defense']}<br>
                Vitesse: ${pokemon.base.Speed}
            `;
            info.appendChild(stats);

            card.appendChild(info);
            pokemonContainer.appendChild(card);
        });
    };

    // Gestionnaires d'événements
    searchButton.addEventListener('click', () => {
        const query = searchBar.value.trim();
        const searchType = searchTypeSelect.value;

        if (query) {
            fetchPokemon(searchType, query);
        }
    });

    randomButton.addEventListener('click', () => {
        fetchRandomPokemon();
    });

    // Récupère un Pokémon au hasard au chargement de la page
    fetchRandomPokemon();
});
