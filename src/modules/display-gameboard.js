function generateGameboard(player, occupiedCoordinates) {
    let containerDiv = document.getElementById(player);
    let boardDiv = document.createElement('div');
    boardDiv.className = "gameboard";
    for (let row = 0; row < 7; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.id = `row-${row}`
        rowDiv.className = "row"
        for (let column = 0; column < 7; column++) {
            let squareDiv = document.createElement('div');
            squareDiv.className = `square`;
            if (player == "player-one") {
                if (Object.keys(occupiedCoordinates).includes(`${row},${column}`)){
                    squareDiv.style.backgroundColor = "grey";
                };
            }else if (player == "player-two") {
                squareDiv.addEventListener("click", () => {
                    console.log("(" + [row,column].toString() + ")");
                });
            }
            rowDiv.appendChild(squareDiv);
        }
        boardDiv.appendChild(rowDiv);
    };
    containerDiv.appendChild(boardDiv);
};

export {generateGameboard};