/********Global Variables*********/
var playerX = 1;
var playerO = 0;
var currentPlayer = playerX;
var gameTile = ""; //saves the attribute background image X or O
var playerMoves = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; //playerMoves stores Xs and Os
var moves = 0; //moves stores the array position and will increment after each successful move
var winConditions = [
    [0, 1, 2], [3, 4, 5], [7, 8, 9], //horizontal win conditions
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical win conditions
    [0, 4, 8], [2, 4, 6] //diagonal win conditions
];

$(document).ready(function () {
    console.log('document was loaded');
    var row = "<div class='col-sm-9 col-sm-offset-2 row'></div>";
    var tile = "<div class='col-sm-4 gameSquare'></div>";


    for (var x = 1; x <= 3; x++) {

        $(row).appendTo(".gameBoard");

        for (var y = 1; y <= 3; y++) {

            $(tile).appendTo(".row:nth-child(" + x + ")");
            //" + x + " will be 1 or 2 or 3
        }
    }

    var whoseTurnIsItAnyway = $("<div>", { //creating div that shows active player with appropriate classes
        class: "col-sm-9",
        class: "col-sm-offset-3",
        class: "whoseTurn",
    });

    $('body').append("<div id='playerContainer'></div>");
    $("#playerContainer").append(whoseTurnIsItAnyway).text("Player X's move!");

    $(".gameSquare").click(function () {
        var activeTile = $(this)
        playerMove(activeTile);
        gameTile = $(this).attr('class');
        console.log('gameTile is', gameTile)
        storeMove(gameTile);
        doWeHaveAWinner();
    });

});



function storeMove(gamePiece) {
    playerMoves[moves] = gamePiece; //we add in gamePiece to our playerMoves array based on
//moves which determines our index position within the array
    moves += 1; //we increment moves so that it shifts to the next array position
};


function playerMove(activeTile) {
    if ($(activeTile).text() == "") { //if the tile is empty
        console.log('activeTile is', activeTile)
        if (currentPlayer == playerX) { //if it is X's move
            $(activeTile).addClass('xSquare'); //place an X onto the tile
            currentPlayer = playerO; //switch from X to O's move
            //$(whoseTurnIsItAnyway).text("Player O's move!"); // update to show it is O's turn
        } else { //if it is O's move
            $(activeTile).addClass('oSquare'); //place an O onto the tile
            currentPlayer = playerX; //switch from O to X's move
            //$(whoseTurnIsItAnyway).text("Player X's move!"); //update to show it is X's turn
        }
    } else { //if the tile is already taken by X or O
        alert("Pick a different square."); //warning to let player know that square is taken
    }
    ;
}

/*************************
 * NAME/TYPE: doWeHaveAWinner function
 * PURPOSE: This function evaluates if a win condition has been met and declares the winner. It
 * accomplishes this within a for loop that iterates through our playerMoves array, looking first
 * if there are any empty positions. It then
 * GLOBAL/LOCAL VARIABLES: N/A
 * PARAMETER(S): N/A
 * FUNCTIONS CALLED: inputDigit()
 **************************/
var x = "col-sm-4 gameSquare xSquare";

function doWeHaveAWinner() {

    for (var i = 0; i < winConditions.length; i++) {
        console.log("testing: (winConditions[" + i + "][0]");
        console.log("Condition Test ", playerMoves[winConditions[i][0]]);
        if ((playerMoves[i] != "")
            &&
            (playerMoves[winConditions[i][0]]) == (playerMoves[winConditions[i][1]])
            &&
            (playerMoves[winConditions[i][1]]) == (playerMoves[winConditions[i][2]])) {
            console.log("Winner True!", playerMoves[winConditions[i][0]], playerMoves[winConditions[i][1]], playerMoves[winConditions[i][2]]);
            /*if (playerMoves[winConditions[i][0]] == x) {//we need to somehow determine if X or O has won
                alert("X Won!"); //we need to decide how to indicate the winner. alert in place for now
            } else {
                //playerMoves.splice(0); //empties the entire array
            }*/
        }
    }
}



