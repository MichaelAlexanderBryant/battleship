function placeShip(shipSize) {
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
                        gameboard[0]["childNodes"][row+i]["childNodes"][column].style.backgroundColor = "white";
                    }
                }
            })
            gameboard[0]["childNodes"][row]["childNodes"][column].addEventListener("click", () => {
                if (row <= 7-shipSize) {
                    console.log("(" + row + "," + column + ")");
                }
            })
        }
    }
}

export { placeShip };