const player = require('../factory-functions/player');

describe('Player factory function', () => {
    let playerOne;
    let playerTwo;
    beforeEach(() => {
        playerOne = player("human");
    });
    it('Attack opponent and hit', () => {
        playerTwo = player("human");
        playerOne.playerGameboard.setShip(2, "vertical", [0,0]);
        expect(playerTwo.attackEnemy(playerOne, [0,0])).toBe(true);
    });
    it('Attack opponent and miss', () => {
        playerTwo = player("human");
        playerOne.playerGameboard.setShip(2, "vertical", [0,0]);
        expect(playerTwo.attackEnemy(playerOne, [0,1])).toBe(false);
    });
    it('Have CPU choose random coordinate to attack', () => {
        playerTwo = player("cpu");
        playerOne.playerGameboard.setShip(2, "vertical", [0,0]);
        expect(playerTwo.attackEnemy(playerOne)).toBeDefined();
    });
    it('Have CPU attack 49 times and never choose same square repeatedly', () => {
        playerTwo = player("cpu");
        for (let i = 0; i < 49; i++) {
            playerTwo.attackEnemy(playerOne)
        };
        expect(playerTwo.squaresNotAttacked.length).toBe(0);
    });
});