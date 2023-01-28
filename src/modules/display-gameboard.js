function generateGameboard() {
    let containerDiv = document.getElementById('container');
    let boardDiv = document.createElement('div');
    boardDiv.id = "gameboard";
    for (let column = 0; column < 7; column++) {
        let columnDiv = document.createElement('div');
        columnDiv.id = `column-${column}`
        for (let row = 0; row < 7; row++) {
            let rowDiv = document.createElement('div');
            rowDiv.className = `square`;
            columnDiv.appendChild(rowDiv);
        }
        boardDiv.appendChild(columnDiv);
    };
    containerDiv.appendChild(boardDiv);
};

export {generateGameboard};