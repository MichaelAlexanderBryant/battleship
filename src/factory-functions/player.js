const gameboard = require('./gameboard');

const player = (playerType) => {
    let playerGameboard = gameboard();
    let squaresNotAttacked= [];
    if (playerType == "cpu") {
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                squaresNotAttacked.push([i,j]);
            };
        };
    };
    const attackEnemy = (otherPlayer, coordinate=null) => {
        if (playerType == "human") {
            return otherPlayer.playerGameboard.receiveAttack(coordinate);
        } else if (playerType == "cpu") {
            let randomCoordinateIndex = Math.floor(Math.random() * squaresNotAttacked.length);
            let attackCoordinate = squaresNotAttacked.splice(randomCoordinateIndex, 1); 
            return otherPlayer.playerGameboard.receiveAttack(...attackCoordinate);
        }
    };
    return { squaresNotAttacked, playerGameboard, attackEnemy}
};

module.exports = player;