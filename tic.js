/********Global Variables*********/
var playerX = 1;
var playerO = 0;
var currentPlayer = playerX;
var gameTile = ""; //saves the attribute background image X or O
var playerMoves = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; //playerMoves stores Xs and Os
var moves; //moves stores the array position and will increment after each successful move
var winner = '';
var no_winner = 0
var winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal win conditions
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical win conditions
    [0, 4, 8], [2, 4, 6] //diagonal win conditions
];

$(document).ready(function () {
    console.log('document was loaded');
    $('#winner').css({"opacity": "0"}).fadeTo(2000, 1);
    $('#playerX').addClass('playerX_flash');
    $('#playerO').addClass('playerO_flash');
    setTimeout(function () {
        $('#playerX').fadeTo(100, 0);
        setTimeout(function () {
            $('#playerX').css({"top": "45vh"});
        }, 500);
        setTimeout(function () {
            $('#playerX').css({"opacity": "1"});
        }, 500);
    }, 1500);


    for (var x = 1; x <= 3; x++) { //for loop to add 3 rows
        var row = $("<div>", { //creating row div with appropriate classes
            class: "col-sm-9 col-sm-offset-1 row",
            //class: "col-sm-offset-3",
            //class: "row",
        });
        $(row).appendTo(".gameBoard"); //append rows

        for (var y = 1; y <= 3; y++) { //for loop to add tiles
            var tile = $("<div>", { //creating tile div with appropriate classes
                class: "col-sm-4 gameSquare",
                //class: "gameSquare",
            });
            $(tile).appendTo(".row:nth-child(" + x + ")"); //append tiles to respective row
            //" + x + " will be 1 or 2 or 3
        }
        ;
    }
    ;

    for (var j = 1; j <= 1; j++) {
        $('.row:nth-child(' + j + ')').attr('ball', j);
        for (var i = 1; i <= 3; i++) {
            $('.row:nth-child(' + j + ') .gameSquare:nth-child(' + i + ')').attr('Win-Tag', i);
        }
    }

    for (var j = 2; j <= 2; j++) {
        $('.row:nth-child(' + j + ')').attr('ball', j);
        for (var i = 1; i <= 3; i++) {
            $('.row:nth-child(' + j + ') .gameSquare:nth-child(' + i + ')').attr('Win-Tag', i + 3);
        }
    }

    for (var j = 3; j <= 3; j++) {
        $('.row:nth-child(' + j + ')').attr('ball', j);
        for (var i = 1; i <= 3; i++) {
            $('.row:nth-child(' + j + ') .gameSquare:nth-child(' + i + ')').attr('Win-Tag', i + 6);
        }
    }


    /*************************
     *  NAME/TYPE: gameSquare click function
     * PURPOSE: When a gameSquare is clicked, this gameSquare is saved as the activeTile. It is passed
     * to the function playerMove which places an X or O and also switches the currentPlayer. storeMove is
     * called and saves the gamePiece into our playerMoves array. It then saves the background image
     * (placed via class) into var gameTile and runs the doWeHaveAWinner function which checks to see
     * if a player has met one of the win conditions.
     * GLOBAL/LOCAL VARIABLES: activeTile, gameTile
     * PARAMETER(S): activeTile
     * FUNCTIONS CALLED: playerMove(), storeMove(), doWeHaveAWinner()
     **************************/
    $(".gameSquare").click(function () { //when a gameSquare is clicked...
        var activeTile = $(this);//activeTile records the particular gameSquare
        console.log('activeTile is', activeTile)
        console.log('gameTile is', gameTile);
        moves = $(this).attr('win-tag');
        playerMove(activeTile);
        doWeHaveAWinner();
        console.log('Move #: ', moves);
    });

});

/*************************
 *  NAME/TYPE: playerMove function
 * PURPOSE: This function's responsibilities are two-fold. First it places an X or O inside the
 * activeTile through use of classes. It then switches to the appropriate currentPlayer.
 * GLOBAL/LOCAL VARIABLES: activeTile, currentPlayer, playerX, playerO
 * PARAMETER(S): activeTile
 * FUNCTIONS CALLED: N/A
 **************************/
function playerMove(activeTile) {
    if ($(activeTile).text() == "") { //if the tile is empty
        console.log('currentPlayer: ', currentPlayer);
        if (currentPlayer == playerX) { //if it is X's move

            setTimeout(function () {
                $('#playerX').css({"top": "5vh"});
            }, 200);
            setTimeout(function () {
                $('#playerX').css({"opacity": "0"});
            }, 100);

            setTimeout(function () {
                setTimeout(function () {
                    $('#playerO').css({"bottom": "45vh"});
                }, 200);
                setTimeout(function () {
                    $('#playerO').css({"opacity": "1"});
                }, 200);
            }, 200);

            console.log("X!: ", currentPlayer);
            $(activeTile).addClass('xSquare'); //place an X onto the tile
            currentPlayer = playerO; //switch from X to O's move
            console.log("X!: ", currentPlayer);
            gameTile = "X";
            storeMove(gameTile);
            //$(whoseTurnIsItAnyway).text("Player O's move!"); // update to show it is O's turn
        } else { //if it is O's move

            setTimeout(function () {
                $('#playerO').css({"bottom": "5vh"});
            }, 200);
            setTimeout(function () {
                $('#playerO').css({"opacity": "0"});
            }, 100);

            setTimeout(function () {
                setTimeout(function () {
                    $('#playerX').css({"top": "45vh"});
                }, 200);
                setTimeout(function () {
                    $('#playerX').css({"opacity": "1"});
                }, 200);
            }, 200);

            console.log("O!: ", currentPlayer);
            $(activeTile).addClass('oSquare'); //place an O onto the tile
            currentPlayer = playerX; //switch from O to X's move
            gameTile = "O";
            storeMove(gameTile);
            //$(whoseTurnIsItAnyway).text("Player X's move!"); //update to show it is X's turn
        }
        ;
    } else { //if the tile is already taken by X or O
        alert("Pick a different square."); //warning to let player know that square is taken
    }
    ;
};

/*************************
 *  NAME/TYPE: storeMove function
 * PURPOSE: This function's role is to store each player's tile click's value into an array to use
 * as a basis of comparison with winConditions. It accomplishes this by first taking in gamePiece,
 * which stores ??. It stores gamePiece inside the array at the index position based on what # move
 * it is. moves then increments to the next array position.
 * GLOBAL/LOCAL VARIABLES: gamePiece, playerMoves, moves
 * PARAMETER(S): moves
 * FUNCTIONS CALLED: N/A
 **************************/
function storeMove(gameTile) {
    playerMoves[moves - 1] = gameTile; //we add in gamePiece to our playerMoves array based on
    //moves which determines our index position within the array
    console.log('gameTile is', gameTile);//we increment moves so that it shifts to the next array position
};

/*************************
 * NAME/TYPE: doWeHaveAWinner function
 * PURPOSE: This function evaluates if a win condition has been met and declares the winner. It
 * accomplishes this within a for loop that iterates through our playerMoves array, looking first
 * if there are any empty positions. It then
 * GLOBAL/LOCAL VARIABLES: N/A
 * PARAMETER(S): N/A
 * FUNCTIONS CALLED: inputDigit()
 **************************/

function doWeHaveAWinner() {

    for (var i = 0; i < winConditions.length; i++) {

        if ((playerMoves[winConditions[i][0]]) == (playerMoves[winConditions[i][1]])
            &&
            (playerMoves[winConditions[i][1]]) == (playerMoves[winConditions[i][2]])) {
            console.log("Winner True!", playerMoves[winConditions[i][0]], playerMoves[winConditions[i][1]], playerMoves[winConditions[i][2]]);


            if (playerMoves[winConditions[i][0]] == "X") {
                winner = "x";
                console.log('Winner is X');
            } else {
                winner = "o";
                console.log('Winner is O');
            }

            var win = $('<img>', {
                src: "img/" + winner + "wins.png",
                id: "winner"
            });

            $('#winner').remove();
            $(win).insertAfter('#playerX');
            $('#playerX').remove();
            $('#playerO').remove();
            var replay = $('<img>', {
                src: "img/replay.png",
                id: 'replay'
            });
            $(replay).insertBefore('#winner');
        }
    }
    no_winner += 1;

    if (winner == "" && no_winner == 9) {
        var cat = $('<img>', {
            src: "img/cats.png",
            id: "winner"
        });
        $('#winner').remove();
        $(cat).insertAfter('#playerX');
        $('#playerX').remove();
        $('#playerO').remove();
        var replay = $('<img>', {
            src: "img/replay.png",
            id: 'replay'
        });
        $(replay).insertBefore('#winner');
    }
}


$('.info').on('click', '#replay', function () {
    location.reload();
});



