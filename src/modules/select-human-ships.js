import { addShipToGameboard } from "./add-ship-to-gameboard";
import { displayEmptyGameboard } from "./display-empty-gameboard";

function selectHumanShips(playerOne, shipLengths) {
    displayEmptyGameboard("place-ships");
    let gameboardRows = document.getElementById('place-ships')["childNodes"][0]["childNodes"];
    let idx = 0;
    for (let row = 0; row < 10; row++) {
        for (let column = 0; column < 10; column++) {
            gameboardRows[row]["childNodes"][column].addEventListener("click", () => {
                if (playerOne.playerGameboard.setShip(shipLengths[idx],"vertical", [row, column])) {
                    addShipToGameboard(shipLengths[idx], "vertical", [row, column])
                    idx = idx + 1
                    if (shipLengths.length == idx) {
                        let placementContainer = document.getElementById('ship-placement-container');
                        placementContainer.style.display = "none";
                        let playerContainer = document.getElementById('player-container');
                        playerContainer.style.display = "grid";
                    }
                }
            }, { once: true })
        };
    };  
};

export { selectHumanShips };