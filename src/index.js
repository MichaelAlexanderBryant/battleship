import { getGameboardToPlaceShips } from './modules/get-gameboard-to-place-ships';
import { placeShip } from './modules/place-ship';
import { generateGameboard } from './modules/display-gameboard';
const player = require('./factory-functions/player');

const playerOne = player("human");
const playerTwo = player("cpu");

getGameboardToPlaceShips();
placeShip(2);



// generateGameboard("player-one");
// generateGameboard("player-two");

