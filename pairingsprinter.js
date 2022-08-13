class PairingsPrinter {
    
    printPlayerBye(player) {
        var table = document.getElementById("myTableData");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var index = 0;
        row.insertCell(index++).innerHTML = '';
        row.insertCell(index++).innerHTML = '1';
        row.insertCell(index++).innerHTML = player.firstName + " " + player.lastName;
        row.insertCell(index++).innerHTML = '';
        row.insertCell(index).innerHTML = 'BYE';
    }
    
    printRowPlayers(player1, player2) {
        var table = document.getElementById("myTableData");
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var index = 0;
    
        row.insertCell(index++).innerHTML = rowCount;
    
        if (player1.numBlacks > player2.numBlacks) {
            row.insertCell(index++).innerHTML = '<input type="text" name="result" class="result" required>';
            row.insertCell(index++).innerHTML = player1.firstName + " " + player1.lastName;
            row.insertCell(index++).innerHTML = '<input type="text" name="result" class="result" required>';
            row.insertCell(index).innerHTML = player2.firstName + " " + player2.lastName;
            player2.numBlacks++;
        } else {
            row.insertCell(index++).innerHTML = '<input type="text" name="result" class="result" required>';
            row.insertCell(index++).innerHTML = player2.firstName + " " + player2.lastName;
            row.insertCell(index++).innerHTML = '<input type="text" name="result" class="result" required>';
            row.insertCell(index).innerHTML = player1.firstName + " " + player1.lastName;
            player1.numBlacks++;
        }
        
    }
    
    
}