Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

var roundsPlayed = parseInt(localStorage.getItem("numRounds"));
var totalRounds = parseInt(localStorage.getItem("totalRounds"));
let players = localStorage.getObj("players");

let printer = new StandingsPrinter(players);
printer.printStandings();

if (totalRounds >= roundsPlayed + 1) {
    const pairingsBtn = document.getElementById('pairingsBtn');
    var nextRound = roundsPlayed + 1;
    pairingsBtn.value = 'Pair players for round ' + nextRound;
} else {
    pairingsBtn.style.visibility = "hidden";
    const finalStandingsText = document.querySelector('.finalStandings');
    finalStandingsText.style.visibility = "visible";
}

function startPairings() {
    if (totalRounds >= roundsPlayed + 1) {
        location.replace("./pairings.html");
    }
}


