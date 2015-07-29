/********Global Variables*********/
var currentPlayer = playerX;
var playerX;
var playerO;

$(document).ready(function() {
  var tile = "<div class='gameSquare'><img id='tile' src='img/x.png'></div>";
  var row = "<div class='row'></div>";

  for (var x = 1; x <= 3; x++) {

    $(row).appendTo(".gameBoard");
    console.log("Row");

    for (var y = 1; y <= 3; y++) {

      $(tile).appendTo(".row:nth-child(" + x + ")");
      console.log("Block");
      //" + x + " will be 1 or 2 or 3
    }
  }


var whoseTurnIsItAnyway = "<div class='whoseTurn'></div>";

$("#gameboard").append(whoseTurnIsItAnyway);


$(".tile").click(function(){
  playerMove();
});

function playerMove() {
  if($(this).text() == "") {
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


















});

















