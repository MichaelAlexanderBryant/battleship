const ship = (length) => {
    let hits = 0;
    const hit = () => hits = hits + 1;
    const isSunk = () => hits == length ? true : false;
    return { hit, isSunk };
};