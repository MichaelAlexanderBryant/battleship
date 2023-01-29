import { displayEmptyGameboard } from './display-empty-gameboard';
import { addShipsToGameboard } from './add-ships-to-gameboard';
import { randomizeComputerShips } from './randomize-computer-ships';

function initializeGame(playerOne, playerTwo) {

    displayEmptyGameboard("player-one");
    displayEmptyGameboard("player-two");

    let shipLengths = [5,4,3,3,2];

    let humanShipCoordinates = [
        [0,0],
        [0,2],
        [0,4],
        [0,6],
        [0,8]
    ];
   randomizeComputerShips(playerTwo, shipLengths);

    addShipsToGameboard(playerOne, shipLengths, humanShipCoordinates);
    // addShipsToGameboard(playerTwo, shipLengths, computerShipCoordinates);
};

export {initializeGame};