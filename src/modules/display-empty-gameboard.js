function displayEmptyGameboard(playerNumber) {
    let containerDiv = document.getElementById(playerNumber);
    containerDiv.textContent = '';
    let boardDiv = document.createElement('div');
    boardDiv.className = "gameboard";
    for (let row = 0; row < 10; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.id = `row-${row}`
        rowDiv.className = "row"
        for (let column = 0; column < 10; column++) {
            let squareDiv = document.createElement('div');
            squareDiv.className = `square`;
            rowDiv.appendChild(squareDiv);
        }
        boardDiv.appendChild(rowDiv);
    };
    containerDiv.appendChild(boardDiv);
};

export {displayEmptyGameboard};