const ship = require('./ship');

const gameboard = () => {
    let shipsOnGameboard = [];
    let shipCoordinates = [];
    let checkCoordinates = {};
    let squaresHit = [];
    let squaresMissed = [];
    const setShip = (shipLength, orientation, coordinate) => {
        let newShip = ship(shipLength);
        shipsOnGameboard.push(newShip);
        let newShipCoordinates = [];
        if (orientation == "vertical") {
            if (coordinate[0] + shipLength-1 < 10) {
                for (let i = 0; i < shipLength; i++) {
                    if (!(Object.keys(checkCoordinates).includes([coordinate[0] + i,coordinate[1]].toString()))){
                        newShipCoordinates.push([coordinate[0] + i,coordinate[1]]);
                    } else {
                        return false;
                    };
                };
                shipCoordinates.push(newShipCoordinates);
                for (let j = 0; j < newShipCoordinates.length; j++) {
                    checkCoordinates[newShipCoordinates[j].toString()] = true;
                };
                return true;  
            } else {
                return false;
            };
        } else if (orientation == "horizontal") {
            if (coordinate[1] + shipLength-1 < 10){
                for (let i = 0; i < shipLength; i++) {
                    if (!(Object.keys(checkCoordinates).includes([coordinate[0],coordinate[1]+i].toString()))){
                        newShipCoordinates.push([coordinate[0],coordinate[1] + 1]);
                    } else {
                        return false;
                    }
                };
                shipCoordinates.push(newShipCoordinates);
                for (let j = 0; j < newShipCoordinates.length; j++) {
                    checkCoordinates[newShipCoordinates[j].toString()] = true;
                };
                return true; 
            } else {
                return false;
            };
        }; 
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
    return { setShip, receiveAttack, allShipsDestroyed, squaresHit, squaresMissed };
};

module.exports = gameboard;