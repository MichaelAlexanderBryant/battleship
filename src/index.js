const player = require('./factory-functions/player');
import { displayEmptyGameboard } from './modules/display-empty-gameboard';
import { addShipsToGameboard } from './modules/add-ships-to-gameboard';

const playerOne = player("human");
const playerTwo = player("cpu");

displayEmptyGameboard("player-one");
displayEmptyGameboard("player-two");

let shipLengths = [5,4,3,3,2];
let shipCoordinates = [
    [0,0],
    [0,2],
    [0,4],
    [0,6],
    [0,8]
];

addShipsToGameboard(playerOne, shipLengths, shipCoordinates);
addShipsToGameboard(playerTwo, shipLengths, shipCoordinates);

startGameboard();