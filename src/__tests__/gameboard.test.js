const gameboard = require('../modules/gameboard');

describe('Gameboard factory functions', () => {
    let testGameboard;
    beforeEach(() => {
        testGameboard = gameboard();
    });
    it('Receive and correctly verify a successful attack', () => {
        testGameboard.setShip(2, [0,0]);
        expect(testGameboard.receiveAttack([0,0])).toBe(true);
    });
    it('Receive and correctly verify an unsuccessful attack', () => {
        testGameboard.setShip(2, [0,0]);
        expect(testGameboard.receiveAttack([0,1])).toBe(false);
    });
    it('Correctly verify not all ships have been destroyed', () => {
        testGameboard.setShip(2, [0,0]);
        expect(testGameboard.allShipsDestroyed()).toBe(false);
    });
    it('Correctly verify all ships have been destroyed', () => {
        testGameboard.setShip(2, [0,0]);
        testGameboard.receiveAttack([0,0]);
        testGameboard.receiveAttack([1,0]);
        expect(testGameboard.allShipsDestroyed()).toBe(true);
    });

});