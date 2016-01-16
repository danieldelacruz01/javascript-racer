  var redMoves = 0;
  var blueMoves = 0;

// keydown event
$(document).keyup(function(key){


  if (key.keyCode === 80) {

    // console.log ("p");
    if (redMoves < 19){
      updatePlayerPosition("red");
      redMoves++;

    } else {
      winnerBox("Red")

    };

  } else if (key.keyCode === 81) {

    if (blueMoves < 19){
      updatePlayerPosition("blue");
      blueMoves++;

    } else {
      winnerBox("Blue")
    };


  };
});

var updatePlayerPosition = function (player) {

  var activeCell = $("#" + player + " td.active");
  var moveCell = activeCell.next();

    activeCell.removeClass("active");
    moveCell.addClass("active");

};

var winnerBox = function (winner) {
  if (confirm (winner + " wins! Would you like to play again?")){
    console.log ('yay');
  };

};