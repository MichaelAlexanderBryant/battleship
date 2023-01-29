import { addShipToGameboard } from "./add-ship-to-gameboard";
import { displayEmptyGameboard } from "./display-empty-gameboard";

function selectHumanShips(playerOne, shipLengths) {
    displayEmptyGameboard("place-ships");
    let gameboardRows = document.getElementById('place-ships')["childNodes"][0]["childNodes"];
    let radioButton = document.getElementById('vertical-button')
    let orientation;
    let idx = 0;
    for (let row = 0; row < 10; row++) {
        for (let column = 0; column < 10; column++) {
            gameboardRows[row]["childNodes"][column].addEventListener("mouseover", () => {
                radioButton.checked == true ? orientation = "vertical" : orientation = "horizontal";
                if (orientation == "vertical") {
                    let colorAll = true;
                    for (let i = 0; i < shipLengths[idx]; i++) {
                        let currentRow = row+i
                        if (Object.keys(playerOne.playerGameboard.checkCoordinates).includes(""+currentRow+","+column) || currentRow > 9) {
                            colorAll = false;
                        }
                    }
                    if (colorAll == true) {
                        for (let i = 0; i < shipLengths[idx]; i++) {
                            gameboardRows[row+i]["childNodes"][column].style.backgroundColor = "green";
                        };
                    };
                    colorAll=True;
                } else {
                    let colorAll = true;
                    for (let i = 0; i < shipLengths[idx]; i++) {
                        let currentColumn = column+i
                        if (Object.keys(playerOne.playerGameboard.checkCoordinates).includes(""+row+","+currentColumn) || currentColumn > 9) {
                            colorAll = false;
                        }
                    }
                    if (colorAll == true) {
                        for (let i = 0; i < shipLengths[idx]; i++) {
                            gameboardRows[row]["childNodes"][column+i].style.backgroundColor = "green";
                        };
                    };
                    colorAll=True;
                };
            });
            gameboardRows[row]["childNodes"][column].addEventListener("mouseleave", () => {
                radioButton.checked == true ? orientation = "vertical" : orientation = "horizontal";
                if (orientation == "vertical") {
                    for (let i = 0; i < shipLengths[idx]; i++) {
                        let currentRow = row+i
                        if (!(Object.keys(playerOne.playerGameboard.checkCoordinates).includes(""+currentRow+","+column))) {
                            gameboardRows[row+i]["childNodes"][column].style.backgroundColor = "white";
                        }
                    }
                } else {
                    for (let i = 0; i < shipLengths[idx]; i++) {
                        let currentColumn = column+i
                        if (!(Object.keys(playerOne.playerGameboard.checkCoordinates).includes(""+row+","+currentColumn))) {
                            gameboardRows[row]["childNodes"][column+i].style.backgroundColor = "white";
                        }
                    }
                }
                
            });
            gameboardRows[row]["childNodes"][column].addEventListener("click", () => {
                radioButton.checked == true ? orientation = "vertical" : orientation = "horizontal";
                if (playerOne.playerGameboard.setShip(shipLengths[idx], orientation, [row, column])) {
                    addShipToGameboard(shipLengths[idx], orientation, [row, column])
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