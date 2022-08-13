Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

var roundsPlayed = parseInt(localStorage.getItem("numRounds"));
var totalRounds = parseInt(localStorage.getItem("totalRounds"));
let players = localStorage.getObj("players");

const pairingsBtn = document.getElementById('pairingsBtn');

if (totalRounds == roundsPlayed + 1) {
    pairingsBtn.value = 'Submit results from round ' + (roundsPlayed + 1) + " and view final standings"; 
} else {
    pairingsBtn.value = 'Submit results from round ' + (roundsPlayed + 1);
}

var pairingsPrinter = new PairingsPrinter();
var scoreKeeper = new ScoreKeeper();
var errorHandler = new ErrorHandler();
var pairingSystem = new PairingSystem();
var sorter = new Sorter();

setupRound();

function setupRound() {

    var table = document.getElementById('myTableData');
    var td = table.rows[0].cells[0];
    td.width = '30px';

    td = table.rows[0].cells[1];
    td.width = '30px';

    td = table.rows[0].cells[3];
    td.width = '30px';

    var start = 0;
    let bye = false;

    if (players.length % 2 == 1) {
        bye = true;
        while (start < players.length && players[start].hasBye) {
            start++;
        }
        scoreKeeper.givePlayerBye(players[start]);
    }

    if (roundsPlayed == 0) {
        pairingSystem.pairRoundOne(bye);
    } else {
        pairingSystem.pairPlayers();
    }

    if (bye) {
        pairingsPrinter.printPlayerBye(players[start]);
    }
}




 function cleanResult(result) {
    if (result === '1/2') {
        var newResult = .5;
        return newResult;
    } else {
        return parseInt(result);
    }
 }

 function verifyResult(result1, result2) {
    if (result1 + result2 === 1) {
        return true;
    } 
    return false;
 }

function processResults() {
    errorHandler.clearError();
    var table = document.getElementById("myTableData");
    var endIndex = table.rows.length - 1;

    if (table.rows[table.rows.length - 1].cells[4].innerHTML === 'BYE') {
        endIndex--;
    }
    for (var i = 1; i <= endIndex; i++) {
        var whiteName = table.rows[i].cells[2].innerHTML;
        var blackName = table.rows[i].cells[4].innerHTML;
        var whiteResult = table.rows[i].cells[1].children[0].value;
        var newWhiteResult = cleanResult(whiteResult);
        var blackResult = table.rows[i].cells[3].children[0].value;
        newBlackResult = cleanResult(blackResult);
        if (isNaN(newWhiteResult) || isNaN(newBlackResult) || 
        (newWhiteResult != 0 && newWhiteResult != 1 && newWhiteResult != .5) || 
        (newBlackResult != 0 && newBlackResult != 1 && newBlackResult != .5)) {
            errorHandler.showError("pair-error", "Please enter a win (1), draw (1/2), or loss(0)");
            return false;
        }
        if (!verifyResult(newWhiteResult, newBlackResult)) {
            errorHandler.showError("pair-error", "White and black scores must add up to 1");
            return false;
        }

        scoreKeeper.updatePlayer(whiteName, newWhiteResult);
        scoreKeeper.updatePlayer(blackName, newBlackResult);
   
    }
    sorter.sortPlayedPlayers();
    localStorage.setObj("players", players);
    localStorage.setItem("numRounds", roundsPlayed + 1);
    location.replace("./standings.html");
    
    return false;
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

