function addShipToGameboard(length, orientation, shipCoordinate) {
    let shipPlacementBoard = document.getElementById('place-ships')["childNodes"][0]["childNodes"];
    let playerBoard = document.getElementById('player-one')["childNodes"][0]["childNodes"];
    if (orientation == "vertical") {
        for (let i = 0; i < length; i++) {
            shipPlacementBoard[shipCoordinate[0]+i]["childNodes"][shipCoordinate[1]].style.backgroundColor = "grey";
            playerBoard[shipCoordinate[0]+i]["childNodes"][shipCoordinate[1]].style.backgroundColor = "grey";
        }
    } else {
        for (let i = 0; i < length; i++) {
            shipPlacementBoard[shipCoordinate[0]]["childNodes"][shipCoordinate[1]+i].style.backgroundColor = "grey";
            playerBoard[shipCoordinate[0]+i]["childNodes"][shipCoordinate[1]].style.backgroundColor = "grey";
        };
    };
};

export { addShipToGameboard };