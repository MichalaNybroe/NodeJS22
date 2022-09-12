let score= 100;

let playerOne;
let playerTwo;


export function initializePlayers(playerOneIntialize, playerTwoInitialize) {
    playerOne = playerOneIntialize,
    playerTwo = playerTwoInitialize
}

export function initializeScore(scoreInitialize = 301) {
    score=scoreInitialize
}

export function initializeGame() {
    console.log(playerOne, playerTwo);
    console.log("Game starts with score...", score);
}