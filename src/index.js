import { getGameboardToPlaceShips } from './modules/place-ship-gameboard';
import { placeHumanShip } from './modules/place-human-ship';
import { placeComputerShips } from './modules/place-computer-ships';
const player = require('./factory-functions/player');

const playerOne = player("human");
const playerTwo = player("cpu");

getGameboardToPlaceShips([]);
placeHumanShip(playerOne, [4,3,3,2]);
placeComputerShips(playerTwo);





