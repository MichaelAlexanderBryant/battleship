function getGameboardToPlaceShips() {
    let containerDiv = document.getElementById("place-ships");
    let boardDiv = document.createElement('div');
    boardDiv.className = "gameboard";
    for (let row = 0; row < 7; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.id = `row-${row}`
        rowDiv.className = "row"
        for (let column = 0; column < 7; column++) {
            let squareDiv = document.createElement('div');
            squareDiv.className = `square row-${row} column-${column}`;
            rowDiv.appendChild(squareDiv);
        }
        boardDiv.appendChild(rowDiv);
    };
    containerDiv.appendChild(boardDiv);
};

export { getGameboardToPlaceShips };