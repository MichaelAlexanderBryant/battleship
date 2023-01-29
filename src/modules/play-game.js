const player = require('../factory-functions/player');
import { initializeGame } from './initialize-game';
import { addAttackToGameboard } from './add-attack-to-gameboard';

function playGame(playerOne, playerTwo){
    let gameboardRows = document.getElementById('player-two')["childNodes"][0]["childNodes"];
    for (let row = 0; row < 10; row++) {
        for (let column = 0; column < 10; column++) {
            gameboardRows[row]["childNodes"][column].addEventListener("click", () => {
                playerOne.attackEnemy(playerTwo, [row,column])
                addAttackToGameboard(playerTwo, "player-two");
                playerTwo.attackEnemy(playerOne);
                addAttackToGameboard(playerOne, "player-one");
                if (playerOne.playerGameboard.allShipsDestroyed()) {
                    alert('You lost!');
                    let playerOne = player("human");
                    let playerTwo = player("cpu");
                    initializeGame(playerOne, playerTwo);
                    playGame(playerOne, playerTwo);
                } else if (playerTwo.playerGameboard.allShipsDestroyed()) {
                    alert('You won!');
                    let playerOne = player("human");
                    let playerTwo = player("cpu");
                    initializeGame(playerOne, playerTwo);
                    playGame(playerOne, playerTwo);
                }
            }, { once: true })
        };
    };
};

export { playGame };