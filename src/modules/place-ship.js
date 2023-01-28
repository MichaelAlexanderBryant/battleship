import { generateGameboard } from "./display-gameboard";
import { getGameboardToPlaceShips } from "./place-ship-gameboard";

function placeShip(player, shipLengths) {
    if (shipLengths.length == 0){
        let container = document.getElementById('place-ships');
        container.remove();
        let playerContainer = document.getElementById('player-container');
        playerContainer.style.display = "grid";
        generateGameboard("player-one", player.playerGameboard.checkCoordinates);
        generateGameboard("player-two", {});
    }
    else {
        let shipSize = shipLengths.shift()
        let gameboard = document.getElementsByClassName('gameboard');
        for (let row = 0; row < 7; row++) {
            for (let column = 0; column < 7; column++) {
                gameboard[0]["childNodes"][row]["childNodes"][column].addEventListener("mouseover", () => {
                    if (row <= 7-shipSize) {
                        for (let i = 0; i < shipSize; i++) {
                            gameboard[0]["childNodes"][row+i]["childNodes"][column].style.backgroundColor = "grey";
                        }
                    }
                })
                gameboard[0]["childNodes"][row]["childNodes"][column].addEventListener("mouseleave", () => {
                    if (row <= 7-shipSize) {
                        for (let i = 0; i < shipSize; i++) {
                            if(!(Object.keys(player.playerGameboard.checkCoordinates).includes(`${row+i},${column}`))) {
                                gameboard[0]["childNodes"][row+i]["childNodes"][column].style.backgroundColor = "white";
                            };
                        }
                    }
                })
                gameboard[0]["childNodes"][row]["childNodes"][column].addEventListener("click", () => {
                    if (player.playerGameboard.setShip(shipSize, "vertical", [row, column])) {
                        let container = document.getElementById('place-ships');
                        container.textContent = '';
                        getGameboardToPlaceShips(player.playerGameboard.checkCoordinates);
                        placeShip(player, shipLengths);
                    }
                })
            }
        }
    }
}

export { placeShip };