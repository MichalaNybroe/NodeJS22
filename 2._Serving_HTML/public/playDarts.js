// nyere syntaks så den importeres, hvorfor man kun skal henvise til en fil i html filen
import {initializeScore, initializePlayers, initializeGame} from "./dartGame.js";

initializeScore(501);

initializePlayers("Simon", "Silke");

initializeGame();