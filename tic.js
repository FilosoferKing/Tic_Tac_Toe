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

$(document).ready(function(){
  console.log('document was loaded');

  for(var x = 1; x<=3; x++){ //for loop to add 3 rows
    var row = $("<div>", { //creating row div with appropriate classes
    class: "col-sm-9 col-sm-offset-3 row",
    //class: "col-sm-offset-3",
    //class: "row",
  });
    $(row).appendTo(".gameBoard"); //append rows
    
    for(var y = 1; y<=3; y++){ //for loop to add tiles
    var tile = $("<div>", { //creating tile div with appropriate classes
    class: "col-sm-4 gameSquare",
    //class: "gameSquare",
  });
      $(tile).appendTo(".row:nth-child(" + x + ")"); //append tiles to respective row
      //" + x + " will be 1 or 2 or 3
    };
  };

  var whoseTurnIsItAnyway = $("<div>", { //creating div that shows active player with appropriate classes
    class: "col-sm-9 col-sm-offset-3 whoseTurn",
    //class: "col-sm-offset-3",
    //class: "whoseTurn",
  });

    $('body').append("<div id='playerContainer'></div>"); //add the div to the body
    $("#playerContainer").append(whoseTurnIsItAnyway).text("Player X's move!"); //add a div with text 
    //indicating whose move it is to the div whoseTurnIsItAnyway

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
  $(".gameSquare").click(function(){ //when a gameSquare is clicked...
  var activeTile=$(this);//activeTile records the particular gameSquare
  console.log('activeTile is',activeTile)
  playerMove(activeTile); //
  gameTile = $(this).attr('class'); //records the attribute background for the gameSquare clicked
  console.log('gameTile is',gameTile)
  playerMove(activeTile);
  storeMove(gameTile);
  doWeHaveAWinner();

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
  if($(activeTile).text() == "") { //if the tile is empty
    console.log('currentPlayer: ', currentPlayer);
    if(currentPlayer == playerX) { //if it is X's move
        console.log("X!: ", currentPlayer);
      $(activeTile).addClass('xSquare'); //place an X onto the tile
      currentPlayer = playerO; //switch from X to O's move
      //$(whoseTurnIsItAnyway).text("Player O's move!"); // update to show it is O's turn
    } else { //if it is O's move
        console.log("O!: ", currentPlayer);
      $(activeTile).addClass('oSquare'); //place an O onto the tile
      currentPlayer = playerX; //switch from O to X's move
      //$(whoseTurnIsItAnyway).text("Player X's move!"); //update to show it is X's turn
    };
  } else { //if the tile is already taken by X or O
      alert("Pick a different square."); //warning to let player know that square is taken
  };
}

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
  playerMoves[moves] += gameTile; //we add in gamePiece to our playerMoves array based on
  //moves which determines our index position within the array
  console.log('gameTile is', gameTile);
  moves++; //we increment moves so that it shifts to the next array position
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
var x = "col-sm-4 gameSquare xSquare";

function doWeHaveAWinner() {
    for (var i = 0; i < winConditions.length; i++) {
        //console.log("testing: (winConditions[" + i + "][0]");
        //console.log("Condition Test ", playerMoves[winConditions[i][0]]);
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



