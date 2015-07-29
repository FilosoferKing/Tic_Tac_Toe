/********Global Variables*********/
var currentPlayer = playerX;
var playerX = 1;
var playerO = 0;
var gameTile = ""; //saves the attribute background image X or O
var playerMoves = []; //playerMoves stores Xs and Os
var moves = 0; //moves stores the array position and will increment after each successful move
var winConditions = [
    [0,1,2],[3,4,5],[7,8,9], //horizontal win conditions
    [0,3,6],[1,4,7],[2,5,8], //vertical win conditions
    [0,4,8],[2,4,6] //diagonal win conditions
];

$(document).ready(function(){
  console.log('document was loaded');
  var row = "<div class='col-sm-9 col-sm-offset-3 row'></div>";
  var tile = "<div class='col-sm-4 gameSquare'></div>";

  
  for(var x = 1; x<=3; x++){

    $(row).appendTo(".gameBoard");
    
    for(var y = 1; y<=3; y++){
    
      $(tile).appendTo(".row:nth-child(" + x + ")");
      //" + x + " will be 1 or 2 or 3
    }

    var whoseTurnIsItAnyway = "<div class='col-sm-9 col-sm-offset-3 whoseTurn'></div>";

    $('body').append("<div id='playerContainer'></div>");
    $("#playerContainer").append(whoseTurnIsItAnyway).text("Player X's move!");

  $(".gameSquare").click(function(){
  var activeTile=$(this)
  console.log('activeTile is',activeTile)
  playerMove(activeTile);
  gameTile = $(this).attr()
  console.log('gameTile is',gameTile)
  });

});

        var imgX = "<img class='xo' src='img/x.png'>";
        var imgO = "<img class='xo' src='img/o.png'>";
        var light = "<img id='light' src='img/light.png'>";

function playerMove(activeTile) {
  if($(activeTile).text() == "") { //if the tile is empty
    console.log('activeTile is',activeTile)
    if(currentPlayer == playerX) { //if it is X's move
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
  };
}

function storeMove(gamePiece) {
  playerMoves[moves] += gamePiece;
  moves++;
};

function doWeHaveAWinner() {
  for(var i = 0; i < playerMoves.length; i++) {
    if((playerMoves[winConditions[i][0]]) == (playerMoves[winConditions[i][1]])
      &&
    (playerMoves[winConditions[i][1]]) == (playerMoves[winConditions[i][2]])) {
      var winner = 
      alert()
    }
  }
}




