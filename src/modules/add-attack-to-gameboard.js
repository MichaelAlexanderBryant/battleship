function addAttackToGameboard(player, playerNumber) {
    let gameboardRows = document.getElementById(playerNumber)["childNodes"][0]["childNodes"];
    let playerHits = player.playerGameboard.squaresHit;
    for (let i = 0; i < playerHits.length; i++) {
        gameboardRows[playerHits[i][0]]["childNodes"][playerHits[i][1]].style.backgroundColor = "red";
    }
    let playerMisses = player.playerGameboard.squaresMissed;
    for (let j = 0; j < playerMisses.length; j++) {
        gameboardRows[playerMisses[j][0]]["childNodes"][playerMisses[j][1]].style.backgroundColor = "blue";
    }
};

export { addAttackToGameboard };