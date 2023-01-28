import { displayEmptyGameboard } from './display-empty-gameboard';
import { addShipsToGameboard } from './add-ships-to-gameboard';

function initializeGame(playerOne, playerTwo) {

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
};

export {initializeGame};