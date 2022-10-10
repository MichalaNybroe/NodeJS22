const pathVariables = location.pathname.split("/");
const pokemonName = pathVariables[pathVariables.length-1];

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(pokemon => {
        const battlingPokemonImage = document.getElementById("battling-pokemon-sprite")
        battlingPokemonImage.src = pokemon.sprites.other.dream_world.front_default;
        //get from sprite - other - dreamworld

        const iWon = Math.random() >= 0.5;
        const whoWonHeader = document.getElementById("who-won");


        if (iWon) {
            whoWonHeader.innerText = "I won";
        } else {
            whoWonHeader.innerText = "You lost";
        }
    });





