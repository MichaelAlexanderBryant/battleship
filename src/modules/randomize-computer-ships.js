function randomizeComputerShips(playerTwo, shipLengths) {

    let allSquares = []
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            allSquares.push([i,j]);
        };
    };
    let orientations = ["vertical", "horizontal"];
    let ship = 0;
    while (ship != shipLengths.length) {
        let randomOrientationIndex = Math.floor(Math.random() * orientations.length);
        let randomOrientation = orientations[randomOrientationIndex];
        let randomCoordinateIndex = Math.floor(Math.random() * allSquares.length);
        let randomCoordinate = allSquares[randomCoordinateIndex]
        if (playerTwo.playerGameboard.setShip(shipLengths[ship],randomOrientation, randomCoordinate)) {
            ship = ship + 1
        };
    };
};

export { randomizeComputerShips };