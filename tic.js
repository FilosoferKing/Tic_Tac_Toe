/********Global Variables*********/
var currentPlayer = playerX;
var playerX;
var playerO;

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
  }

  var whoseTurnIsItAnyway = "<div class='col-sm-9 col-sm-offset-3 whoseTurn'></div>";

  $("#playerContainer").append(whoseTurnIsItAnyway).text("Player X's move!").addClass("playerContainer");

  $(".gameSquare").click(function(){
  var activeTile=$(this)
  console.log('activeTile is',activeTile)
  playerMove(activeTile);
  });

});

<<<<<<< HEAD
function playerMove() {
  if($(this).text() == "" {
    if(currentPlayer == playerX) {
      $(this).text("X");
      currentPlayer = playerO;
    }
    else {
      $(this).text("O");
      currentPlayer = playerX;
    }
  }
}

=======
function playerMove(activeTile) {
  if($(activeTile).text() == "") { //if the tile is empty
    console.log('activeTile is',activeTile)
    if(currentPlayer == playerX) { //if it is X's move
      $(activeTile).text("X"); //place an X onto the tile
      currentPlayer = playerO; //switch from X to O's move
      $(whoseTurnIsItAnyway).text("Player O's move!"); // update to show it is O's turn
    } else { //if it is O's move
      $(activeTile).text("O"); //place an O onto the tile
      currentPlayer = playerX; //switch from O to X's move
      $(whoseTurnIsItAnyway).text("Player X's move!"); //update to show it is X's turn
    } 
  } else { //if the tile is already taken by X or O
      alert("Pick a different square."); //warning to let player know that square is taken
  };
}
>>>>>>> aafce4a39b2aaed0bf2d65ab54d8bfd57c7b7b63
