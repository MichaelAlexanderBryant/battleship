const ship = require('../factory-functions/ship');

describe('Ship factory function', () => {
    let testShip;
    beforeEach(() => { 
        testShip = ship(3);
    });
    it('Accepts a hit', () => {
        expect(testShip.hit()).toBe(1);
    });
    it('Shows that a ship is not sunk', () => {
        testShip.hit();
        expect(testShip.isSunk()).toBe(false);
    });
    it('Accepts multiple hits', () => {
        testShip.hit();
        expect(testShip.hit()).toBe(2);
    });
    it('Shows that a ship is sunk', () => {
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.isSunk()).toBe(true);
    });
    it('Does not accept hits more than its length', () => {
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.hit()).toBe(3);
    });
    it('Shows that a ship is sunk after attempted hit more than its length', () => {
        testShip.hit();
        testShip.hit();
        testShip.hit();
        testShip.hit();
        expect(testShip.isSunk()).toBe(true);
    });
});