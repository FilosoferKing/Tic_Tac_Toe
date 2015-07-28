/********Global Variables*********/
currentPlayer = playerX;
playerX;
playerO;

$(document).ready(function(){
var tile = "<div class='gameSquare'></div>";
var row = "<div class='row'></div>";
  
  for(var x = 1; x<=3; x++){

    $("#gameboard").append(row);
    
    for(var y = 1; y<=3; y++){
    
      $(tile).appendTo(".row:nth-child(" + x + ")");
      //" + x + " will be 1 or 2 or 3
    }
  }

var whoseTurnIsItAnyway = "<div class="whoseTurn"></div>";

$("#gameboard").append(whoseTurnIsItAnyway);

});

$(".tile").click(function(){
  playerMove();
});

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

