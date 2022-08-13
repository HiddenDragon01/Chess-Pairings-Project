class Sorter {

    quickSortPlayers(l, r) {
        var index;
        index = partitionPlayers(l, r); 
        if (l < index - 1) { 
            this.quickSortPlayers(l, index - 1);
        }
        if (index < r) {
            this.quickSortPlayers(index, r);
        }

        function partitionPlayers(l, r) {
            var pivot   = players[Math.floor((r + l) / 2)].rating, 
                i       = l, 
                j       = r; 
            while (i <= j) {
                while (players[i].rating < pivot) {
                    i++;
                }
                while (players[j].rating > pivot) {
                    j--;
                }
                if (i <= j) {
                    swap(players, i, j); 
                    i++;
                    j--;
                }
            }
            return i;
        }
    }

    sortPlayedPlayers() {
        players.sort(function(player1, player2){
            if (player1.numPoints === player2.numPoints) {
                if (player1.rating > player2.rating) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (player1.numPoints < player2.numPoints) {
                return -1;
            } else {
                return 1;
            }
           
        }); 
    }
}