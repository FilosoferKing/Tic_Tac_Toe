/********Global Variables*********/
var playerX = 1;
var playerO = 0;
var currentPlayer = playerX;

$(document).ready(function () {
    console.log('document was loaded');
    var row = "<div class='col-sm-9 col-sm-offset-2 my_row'></div>";
    var tile = "<div class='col-sm-4 gameSquare'></div>";


    for (var x = 1; x <= 3; x++) {

        $(row).appendTo(".gameBoard");

        for (var y = 1; y <= 3; y++) {

            $(tile).appendTo(".my_row:nth-child(" + x + ")");
            console.log("Block");
            //" + x + " will be 1 or 2 or 3
        }
    }

    var whoseTurnIsItAnyway = "<div class='col-sm-9 col-sm-offset-3 whoseTurn'></div>";

    $('body').append("<div id='playerContainer'></div>");
    $("#playerContainer").append(whoseTurnIsItAnyway).text("Player X's move!");

    $(".gameSquare").click(function () {
        var activeTile = $(this);
        console.log('activeTile is', activeTile)
        playerMove(activeTile);
    });

});

var imgX = "<img class='xo' src='img/x.png'>";
var imgO = "<img class='xo' src='img/o.png'>";
var light = "<img id='light' src='img/light.png'>";

function playerMove(activeTile) {
    if ($(activeTile).text() == "") { //if the tile is empty
        console.log('activeTile is', activeTile)
        if (currentPlayer == playerX) { //if it is X's move
            $(activeTile).addClass('xSquare'); //place an X onto the tile
            currentPlayer = playerO; //switch from X to O's move
            //$(whoseTurnIsItAnyway).text("Player O's move!"); // update to show it is O's turn
        } else { //if it is O's move
            $(activeTile).addClass('oSquare');; //place an O onto the tile
            currentPlayer = playerX; //switch from O to X's move
            //$(whoseTurnIsItAnyway).text("Player X's move!"); //update to show it is X's turn
        }
    } else { //if the tile is already taken by X or O
        alert("Pick a different square."); //warning to let player know that square is taken
    }
    ;
}














