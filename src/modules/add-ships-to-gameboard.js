function addShipsToGameboard(player, lengths, ships) {
    let gameboardRows = document.getElementById('player-one')["childNodes"][0]["childNodes"];
    for (let ship = 0; ship < ships.length; ship++) {
        player.playerGameboard.setShip(lengths[ship], "vertical", ships[ship]);
        for (let length = 0; length < lengths[ship]; length++) {
            gameboardRows[length+ships[ship][0]]["childNodes"][ships[ship][1]].style.backgroundColor = "grey";
        };
    };
};

export { addShipsToGameboard };