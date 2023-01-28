const ship = (length) => {
    let hits = 0;
    const hit = () => hits < length ? hits = hits + 1 : hits;
    const isSunk = () => hits == length ? true : false;
    return { hit, isSunk };
};

module.exports = ship;