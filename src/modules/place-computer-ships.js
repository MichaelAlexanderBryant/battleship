function placeComputerShips(player) {
    let allSquares = [];
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            allSquares.push([i,j]);
        };
    };
    let shipLengths = [4, 3, 3, 2];
    let orientations = ["vertical", "horizontal"];
    while (shipLengths.length != 0) {
        let randomOrientationIndex = Math.floor(Math.random() * orientations.length);
        let randomOrientation = orientations[randomOrientationIndex];
        let randomCoordinateIndex = Math.floor(Math.random() * allSquares.length);
        let randomCoordinate = allSquares[randomCoordinateIndex];
        if(player.playerGameboard.setShip(shipLengths[0], "vertical", randomCoordinate)) {
            shipLengths.shift();
            console.log(randomOrientation)
        }
    }
    console.log(player.playerGameboard.checkCoordinates);
};


export { placeComputerShips };