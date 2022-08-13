class PairingSystem {

    pairRoundOne(bye) {
        let p1 = players.length - 1;
        let p2 = 0;
        if (bye) {
            p2 = 1;
        }
        while (p1 > p2) {
            players[p1].opponents[roundsPlayed + 1] = players[p2].firstName + " " + players[p2].lastName;
            players[p2].opponents[roundsPlayed + 1] = players[p1].firstName + " " + players[p1].lastName;
            pairingsPrinter.printRowPlayers(players[p2], players[p1]);
            p1--;
            p2++;
        }
    }
    
    
    pairPlayers() {
        for (let i = players.length - 1; i >= 0; i--) {
            if (Object.keys(players[i].opponents).length == roundsPlayed + 1) {
                continue;
            } else {
                var opponentIndex = findOpponent(i);
                players[i].opponents[roundsPlayed + 1] = players[opponentIndex].firstName + " " + players[opponentIndex].lastName;
                players[opponentIndex].opponents[roundsPlayed + 1] = players[i].firstName + " " + players[i].lastName;
                pairingsPrinter.printRowPlayers(players[i], players[opponentIndex]);
            }
        } 

        function findOpponent(index) {
            for (let i = index - 1; i >= 0; i--) {
                var fullName = players[i].firstName + " " + players[i].lastName;
                if (!(checkPlayed(fullName, players[index].opponents)) && 
                Object.keys(players[i].opponents).length != roundsPlayed + 1) {
                    return i;
                }
            }
            return -1;
        }

        function checkPlayed(fullName, set) {
            for (let i = 0; i <= roundsPlayed; i++) {
                if (set[i] === fullName) {
                    return true;
                }
            }
            return false;
        }
    }
        

}