let players = [];

var errorHandler = new ErrorHandler();
var sorter = new Sorter();

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
function startTournament() {
    errorHandler.clearError();
    let rounds = parseInt(document.getElementsByName('rounds')[0].value);
    if (rounds <= 0 || !rounds) {
        errorHandler.showError("start-error", "Please enter a valid number of rounds");
        return false;
    }
    if (players.length <= 1) {
        errorHandler.showError("start-error", "Please add at least two players");
        return false;
    }
    if (players.length < rounds * 3) {
        errorHandler.showError("start-error", "Please add at least three times as many players as rounds");
        return false;
    }

   
    sorter.quickSortPlayers(0, players.length - 1);

    localStorage.clear();
    localStorage.setObj("players", players);
    localStorage.setItem("numRounds", 0);
    localStorage.setItem("totalRounds", rounds);
    location.replace("./standings.html");
}

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

 function addRow(e) {

    errorHandler.clearError();
        
    var firstName = document.getElementsByName('fname')[0].value.trim();
    var lastName = document.getElementsByName('lname')[0].value.trim();
    var rating = document.getElementsByName('rating')[0].value;
    var table = document.getElementById("myTableData");
    var form = document.getElementById("myForm");

    if (!firstName) {
        errorHandler.showError("fname-error", "Please enter a first name");
        return false;
    }

    if (!lastName) {
        errorHandler.showError("lname-error", "Please enter a last name");
        return false;
    }

    if (!rating) {
        errorHandler.showError("rating-error", "Please enter a rating");
        return false;
    }


    if (isNaN(rating)) {
        errorHandler.showError("rating-error", "Please enter a number for rating");
        return false;
    }
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    rating = parseInt(rating);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= firstName;
    row.insertCell(2).innerHTML= lastName;
    row.insertCell(3).innerHTML= rating;

    let newPlayer = new Player(firstName, lastName, rating);
    players.push(newPlayer);

    form.reset();

    return false;

}

function deleteRow(obj) {

    var index = obj.parentNode.parentNode.rowIndex;
    players.splice(index - 1, 1);
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
    
}




