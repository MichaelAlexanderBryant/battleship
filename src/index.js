import { getGameboardToPlaceShips } from './modules/place-ship-gameboard';
import { placeShip } from './modules/place-ship';
import { generateGameboard } from './modules/display-gameboard';
const player = require('./factory-functions/player');

const playerOne = player("human");
const playerTwo = player("cpu");

getGameboardToPlaceShips();
placeShip(playerOne, [2,3,3,4]);






