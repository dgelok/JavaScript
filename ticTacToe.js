var board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

var won = false;

function takeTurn (player) {
    for (var i = 0; i < 3; i++) {
        console.log(board[i])
    }

    var row = prompt("Which row? 1, 2, or 3: ");
    var column = prompt("Which column? 1, 2, 4");
    

}

function winCheck (array) {
    pass
}


takeTurn("X")


// while (not won) {
//     takeTurn("X");
//     winCheck(board);
//     takeTurn("O");
//     winCheck(board);    
// }

