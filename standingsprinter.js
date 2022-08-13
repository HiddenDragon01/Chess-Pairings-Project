class StandingsPrinter {
    
    constructor(players) {
        this.players = players;
    }

    printStandings() {

        for (let i = 0; i < roundsPlayed; i++) {
            var row = document.getElementById("myRow");
            var x = row.insertCell(-1);
            x.innerHTML = "Rd " + (i + 1);
        }
    
        var row = document.getElementById("myRow");
        var x = row.insertCell(-1);
        x.innerHTML = "Tot";
    
        var table = document.getElementById('myTableData');
        var td = table.rows[0].cells[0];
        td.width = '100px';
    
        td = table.rows[0].cells[1];
        td.width = '200px';
    
        td = table.rows[0].cells[2];
        td.width = '100px';
    
        for (let i = players.length - 1; i >= 0; i--) {
            printRowPlayer(players[i]);
        } 
    
        function printRowPlayer(player) {
            var table = document.getElementById("myTableData");
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var index = 0;
        
            row.insertCell(index++).innerHTML = rowCount;
            row.insertCell(index++).innerHTML = player.firstName + " " + player.lastName;
            row.insertCell(index++).innerHTML = player.rating;
            for (let i = 0; i < roundsPlayed; i++) {
                let result = player.results[i];
                let strResult = translateResult(result);
                let opponent = player.opponents[i + 1];
                if (opponent === 'B--') {
                    row.insertCell(index++).innerHTML = opponent;
                } else {
                    let opponentIndex = findOpponentIndex(opponent);
                    strResult += opponentIndex;
                    row.insertCell(index++).innerHTML = strResult;
                }
            }
            row.insertCell(index++).innerHTML = player.numPoints.toFixed(1);
        }
    
        function findOpponentIndex(opponent) {
            var splitName = opponent.trim().split(/\s+/);
            var firstName = splitName[0];
            var lastName = splitName[1];
    
            for (let i = 0; i < players.length; i++) {
                if (players[i].firstName === firstName && players[i].lastName === lastName) {
                    return players.length - i;
                }
            }
    
            return -1;
        }
    
        function translateResult(result) {
            if (result === 0) {
                return 'L';
            } else if (result === .5)  {
                return 'D';
            } else if (result == 1) {
                return 'W';
            }
        }
    }
    
    
}