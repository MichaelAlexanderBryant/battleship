const ship = require('./ship');

const gameboard = () => {
    let shipsOnGameboard = [];
    let shipCoordinates = [];
    let squaresHit = [];
    let squaresMissed = [];
    const setShip = (shipLength, coordinate) => {
        let newShip = ship(shipLength);
        shipsOnGameboard.push(newShip);
        let newShipCoordinates = []
        for (let i = 0; i < shipLength; i++) {
            newShipCoordinates.push([coordinate[0]+i,coordinate[1]])
        }
        shipCoordinates.push(newShipCoordinates);        
    };
    const receiveAttack = (coordinate) => {
        for (let i = 0; i < shipCoordinates.length; i++){
            for (let j = 0; j < shipCoordinates[i].length; j++) {
                if (shipCoordinates[i][j].toString() === coordinate.toString()){
                    squaresHit.push(coordinate);
                    shipsOnGameboard[i].hit();
                    return true;
                };
            };
        };
        squaresMissed.push(coordinate);
        return false;
    };
    const allShipsDestroyed = () => {
        for (let i = 0; i < shipsOnGameboard.length; i++){
            if (shipsOnGameboard[i].isSunk() == false) {
                return false;
            };
        };
        return true;
    }
    return { setShip, receiveAttack, allShipsDestroyed };
};

module.exports = gameboard;