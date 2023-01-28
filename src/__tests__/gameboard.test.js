const gameboard = require('../modules/gameboard');

describe('Gameboard factory functions', () => {
    let testGameboard;
    beforeEach(() => {
        testGameboard = gameboard();
    });
    it('Verify piece can be placed vertically in bounds', () => {
        expect(testGameboard.setShip(2, "vertical", [3,3])).toBe(true);
    });
    it('Verify piece cannot be placed vertically out of bounds', () => {
        expect(testGameboard.setShip(2, "vertical", [6,0])).toBe(false);
    });
    it('Verify piece can be placed horizontally in bounds', () => {
        expect(testGameboard.setShip(2, "horizontal", [3,3])).toBe(true);
    });
    it('Verify piece cannot be placed horizontally out of bounds', () => {
        expect(testGameboard.setShip(2, "horizontal", [0,6])).toBe(false);
    });
    it('Verify two pieces cannot overlap', () => {
        testGameboard.setShip(2, "vertical", [0,0]);
        expect(testGameboard.setShip(4, "horizontal", [0,0])).toBe(false);
    });
    it('Verify a successful attack', () => {
        testGameboard.setShip(2, "vertical", [0,0]);
        expect(testGameboard.receiveAttack([0,0])).toBe(true);
    });
    it('Verify an unsuccessful attack', () => {
        testGameboard.setShip(2, "vertical" [0,0]);
        expect(testGameboard.receiveAttack([0,1])).toBe(false);
    });
    it('Verify not all (one) ships have been destroyed', () => {
        testGameboard.setShip(2, "vertical", [0,0]);
        expect(testGameboard.allShipsDestroyed()).toBe(false);
    });
    it('Verify all (one) ships have been destroyed', () => {
        testGameboard.setShip(2, "vertical", [0,0]);
        testGameboard.receiveAttack([0,0]);
        testGameboard.receiveAttack([1,0]);
        expect(testGameboard.allShipsDestroyed()).toBe(true);
    });
    it('Verify not all (two) ships have been destroyed', () => {
        testGameboard.setShip(2, "vertical", [0,0]);
        testGameboard.setShip(5, "vertical", [0,4]);
        expect(testGameboard.allShipsDestroyed()).toBe(false);
    });
    it('Verify all (two) ships have been destroyed', () => {
        testGameboard.setShip(2, "vertical", [0,0]);
        testGameboard.setShip(5, "vertical", [0,4]);
        testGameboard.receiveAttack([0,0]);
        testGameboard.receiveAttack([1,0]);
        testGameboard.receiveAttack([0,4]);
        testGameboard.receiveAttack([1,4]);
        testGameboard.receiveAttack([2,4]);
        testGameboard.receiveAttack([3,4]);
        testGameboard.receiveAttack([4,4]);
        expect(testGameboard.allShipsDestroyed()).toBe(true);
    });

});