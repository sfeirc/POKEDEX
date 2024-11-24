document.addEventListener('DOMContentLoaded', () => {
    const BACKEND_URL = 'http://localhost:5001';
    const pokemonContainer = document.getElementById('pokemon-container');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const randomButton = document.getElementById('random-button');
    const searchTypeSelect = document.getElementById('search-type');
    const themeToggle = document.getElementById('theme-toggle');

    // Variables pour les modales
    const filterModal = document.getElementById('filter-modal');
    const sortModal = document.getElementById('sort-modal');
    const filterButton = document.getElementById('filter-button');
    const sortButton = document.getElementById('sort-button');
    const filterClose = document.getElementById('filter-close');
    const sortClose = document.getElementById('sort-close');
    const applyFilterButton = document.getElementById('apply-filter-button');
    const applySortButton = document.getElementById('apply-sort-button');

    // Données Pokémon chargées
    let allPokemonData = [];

    // Tableau pour stocker les instances de graphiques
    let charts = [];

    // Initialize 3D Background Animation
    init3DBackground();

    // Theme Toggle
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        updateChartColors(); // Mettre à jour les couleurs des graphiques
    });

    // Fonction pour mettre à jour les couleurs des graphiques
    function updateChartColors() {
        const isDarkMode = document.body.classList.contains('dark');
        charts.forEach(chart => {
            chart.options.scales.r.pointLabels.color = isDarkMode ? '#fff' : '#000';
            chart.options.scales.r.ticks.color = isDarkMode ? '#fff' : '#000';
            chart.update();
        });
    }

    // Ouvrir les modales
    filterButton.addEventListener('click', () => {
        filterModal.style.display = 'block';
    });

    sortButton.addEventListener('click', () => {
        sortModal.style.display = 'block';
    });

    // Fermer les modales
    filterClose.addEventListener('click', () => {
        filterModal.style.display = 'none';
    });

    sortClose.addEventListener('click', () => {
        sortModal.style.display = 'none';
    });

    // Fermer les modales en cliquant à l'extérieur
    window.addEventListener('click', (event) => {
        if (event.target === filterModal) {
            filterModal.style.display = 'none';
        }
        if (event.target === sortModal) {
            sortModal.style.display = 'none';
        }
    });

    // Appliquer le filtre
    applyFilterButton.addEventListener('click', () => {
        const filterType = document.getElementById('filter-type').value;
        let filteredData = allPokemonData;

        if (filterType) {
            filteredData = allPokemonData.filter(pokemon => pokemon.type.includes(filterType));
        }

        displayPokemon(filteredData);
        filterModal.style.display = 'none';
    });

    // Appliquer le tri
    applySortButton.addEventListener('click', () => {
        const sortAttribute = document.getElementById('sort-attribute').value;
        const sortOrder = document.getElementById('sort-order').value;

        const sortedData = [...allPokemonData].sort((a, b) => {
            let valueA, valueB;

            if (sortAttribute === 'name') {
                valueA = a.name.french.toLowerCase();
                valueB = b.name.french.toLowerCase();
            } else if (sortAttribute === 'id') {
                valueA = a.id;
                valueB = b.id;
            } else {
                valueA = a.base[sortAttribute];
                valueB = b.base[sortAttribute];
            }

            if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        displayPokemon(sortedData);
        sortModal.style.display = 'none';
    });

    // Fonction pour récupérer et afficher un Pokémon au hasard
    const fetchRandomPokemon = () => {
        fetch(`${BACKEND_URL}/hasard`)
            .then(response => response.json())
            .then(data => {
                allPokemonData = [data]; // Stocker les données
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
                if (Array.isArray(data)) {
                    allPokemonData = data; // Stocker les données
                    displayPokemon(data);
                } else {
                    allPokemonData = [data]; // Stocker les données
                    displayPokemon([data]);
                }
            })
            .catch(error => {
                alert(error.message);
            });
    };

    // Fonction pour afficher les cartes Pokémon
    const displayPokemon = (pokemonList) => {
        pokemonContainer.innerHTML = '';
        charts = []; // Réinitialiser les graphiques

        pokemonList.forEach((pokemon, index) => {
            const card = document.createElement('div');
            card.classList.add('pokemon-card');
            card.style.animationDelay = `${index * 0.1}s`;

            const cardInner = document.createElement('div');
            cardInner.classList.add('pokemon-card-inner');

            function formatId(id) {
                return id.toString().padStart(3, '0');
            }

            // Front Side
            const cardFront = document.createElement('div');
            cardFront.classList.add('pokemon-card-front');

            const img = document.createElement('img');
            const formattedId = formatId(pokemon.id);
            img.src = `${BACKEND_URL}/pokemon/image/${formattedId}`;
            img.onerror = () => {
                img.src = 'placeholder.png';
            };
            cardFront.appendChild(img);

            const infoFront = document.createElement('div');
            infoFront.classList.add('pokemon-info');

            const name = document.createElement('h2');
            name.textContent = `${pokemon.name.french} (#${pokemon.id})`;
            infoFront.appendChild(name);

            const typeContainer = document.createElement('div');
            pokemon.type.forEach(type => {
                const typeBadge = document.createElement('span');
                typeBadge.classList.add('type-badge', `type-${type}`);
                typeBadge.textContent = type;
                typeContainer.appendChild(typeBadge);
            });
            infoFront.appendChild(typeContainer);

            cardFront.appendChild(infoFront);

            // Back Side
            const cardBack = document.createElement('div');
            cardBack.classList.add('pokemon-card-back');

            const statsTitle = document.createElement('h2');
            statsTitle.textContent = 'Statistiques';
            cardBack.appendChild(statsTitle);

            const chartContainer = document.createElement('div');
            chartContainer.classList.add('chart-container');

            const canvas = document.createElement('canvas');
            canvas.id = `statsChart${pokemon.id}`;
            chartContainer.appendChild(canvas);

            cardBack.appendChild(chartContainer);

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);
            pokemonContainer.appendChild(card);

            // Create the chart
            const ctx = canvas.getContext('2d');
            const isDarkMode = document.body.classList.contains('dark');

            const statsData = {
                labels: ['PV', 'Attaque', 'Défense', 'Atq. Spé.', 'Déf. Spé.', 'Vitesse'],
                datasets: [{
                    label: 'Statistiques',
                    data: [
                        pokemon.base.HP,
                        pokemon.base.Attack,
                        pokemon.base.Defense,
                        pokemon.base['Sp. Attack'],
                        pokemon.base['Sp. Defense'],
                        pokemon.base.Speed
                    ],
                    backgroundColor: 'rgba(255, 203, 5, 0.5)',
                    borderColor: 'rgba(255, 203, 5, 1)',
                    borderWidth: 2,
                    fill: true,
                    pointBackgroundColor: 'rgba(255, 203, 5, 1)'
                }]
            };

            const statsChart = new Chart(ctx, {
                type: 'radar',
                data: statsData,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: {
                                color: '#ccc'
                            },
                            grid: {
                                color: '#ccc'
                            },
                            pointLabels: {
                                color: isDarkMode ? '#fff' : '#000'
                            },
                            ticks: {
                                backdropColor: 'transparent',
                                color: isDarkMode ? '#fff' : '#000'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            // Stocker l'instance du graphique
            charts.push(statsChart);
        });
    };

    // Initialize 3D Background Animation using Three.js
    function init3DBackground() {
        const container = document.getElementById('background-animation');

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Add 3D objects to the scene
        const geometry = new THREE.IcosahedronGeometry(10, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffcb05, wireframe: true });
        const icosahedron = new THREE.Mesh(geometry, material);
        scene.add(icosahedron);

        camera.position.z = 30;

        // Animation function
        function animate() {
            requestAnimationFrame(animate);

            // Rotate the object
            icosahedron.rotation.x += 0.005;
            icosahedron.rotation.y += 0.005;

            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // Event Listeners
    searchButton.addEventListener('click', () => {
        const query = searchBar.value.trim();
        const searchType = searchTypeSelect.value;

        if (query) {
            fetchPokemon(searchType, query);
        }
    });

    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    randomButton.addEventListener('click', () => {
        fetchRandomPokemon();
    });

    // Fetch a random Pokémon on page load
    fetchRandomPokemon();
});
