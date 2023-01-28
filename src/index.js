const player = require('./factory-functions/player');
import { playGame } from './modules/play-game';
import { initializeGame } from './modules/initialize-game';

let playerOne = player("human");
let playerTwo = player("cpu");
initializeGame(playerOne, playerTwo);
playGame(playerOne, playerTwo);