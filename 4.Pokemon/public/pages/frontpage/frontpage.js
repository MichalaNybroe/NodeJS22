const pokemonList = document.getElementById('pokemon');

/*fetch("/api/pokemon")
        .then(response => response.json())
        .then(result => console.log(result));
*/

// benytter os af then idet det er asynkront
/*fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(result => result.results.forEach(pokemon => {
                // benytter foreach idet den kaster array væk
                // map omdanner til nyt array
                // Gør aldrig brug af innerHTML idet vi ikke ønsker
                // det skal kunne parses.
                const pokemonLi = document.createElement('li');
                pokemonLi.innerText = pokemon.name;
                ul.appendChild(pokemonLi);
        }));
        */


fetch("/api/pokemon")
        .then(response => response.json())
        .then(result => {
                console.log(result.data.results)
                result.data.results.forEach(pokemon => {
                        const pokeDiv = document.createElement('div');

                        const battleLink = document.createElement('a');
                        battleLink.innerText = pokemon.name;
                        battleLink.setAttribute('href', `/battle/${pokemon.name}`);
                        pokeDiv.appendChild(battleLink);
                        pokemonList.appendChild(pokeDiv);
        });
});

/*function moveUser() {
        //location.href = '/battle'; kan bruge begge i det window er globalt browser objekt
        //window.location.replace('battle'); virker også
        // kan også bruge assign metode - virker ligesom href
        window.location.href = '/battle';
};// bedst at bruge replace fremover

setTimeout(moveUser,3000);*/