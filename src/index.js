const player = require('./factory-functions/player');
import { displayEmptyGameboard } from './modules/display-empty-gameboard';
import { addShipsToGameboard } from './modules/add-ships-to-gameboard';
import { addAttackToGameboard } from './modules/add-attack-to-gameboard';

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

let gameboardRows = document.getElementById('player-two')["childNodes"][0]["childNodes"];
for (let row = 0; row < 10; row++) {
    for (let column = 0; column < 10; column++) {
        gameboardRows[row]["childNodes"][column].addEventListener("click", () => {
            playerOne.attackEnemy(playerTwo, [row,column])
            addAttackToGameboard(playerTwo, "player-two");
            playerTwo.attackEnemy(playerOne);
            addAttackToGameboard(playerOne, "player-one");
            // if (playerOne.playerGameboard.allShipsDestroyed()) {
            //     alert('You lost!')
            // } else if (playerTwo.playerGameboard.allShipsDestroyed()) {
            //     alert('You won!')
            // }
        })
    };
};