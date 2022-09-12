let score= 100;

let playerOne;
let playerTwo;


function initializePlayers(playerOneIntialize, playerTwoInitialize) {
    playerOne = playerOneIntialize,
    playerTwo = playerTwoInitialize
}

function initializeScore(scoreInitialize = 301) {
    score=scoreInitialize
}

function initializeGame() {
    console.log(playerOne, playerTwo);
    console.log("Game starts with score...", score);
}