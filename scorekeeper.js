class ScoreKeeper {

    givePlayerBye(player) {
        player.hasBye = true;
        player.opponents[roundsPlayed + 1] = "B--";
        player.numPoints++;
        player.results.push(1);
    }

    updatePlayer(fullName, result) {
        var splitName = fullName.trim().split(/\s+/);
        var firstName = splitName[0];
        var lastName = splitName[1];
    
        for (let i = 0; i < players.length; i++) {
            if (players[i].firstName === firstName && players[i].lastName === lastName) {
                players[i].numPoints += result;
                players[i].results.push(result);
                return;
            }
        }
     }

}