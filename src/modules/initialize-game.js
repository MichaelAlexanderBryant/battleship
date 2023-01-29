import { displayEmptyGameboard } from './display-empty-gameboard';
import { randomizeComputerShips } from './randomize-computer-ships';
import { selectHumanShips } from './select-human-ships';

function initializeGame(playerOne, playerTwo) {

    let playerChoiceBoard = document.getElementById('ship-placement-container')
    playerChoiceBoard.style.display = 'flex';

    let playerBoards = document.getElementById('player-container');
    playerBoards.style.display = 'none';

    displayEmptyGameboard("player-one");
    displayEmptyGameboard("player-two");

    let shipLengths = [5,4,3,3,2];

    selectHumanShips(playerOne, shipLengths);
    randomizeComputerShips(playerTwo, shipLengths);
};

export {initializeGame};