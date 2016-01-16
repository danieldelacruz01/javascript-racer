  var redMoves = 0;
  var blueMoves = 0;

// keydown event
$(document).keyup(function(key){

  if (key.keyCode === 80) {

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

//winning state
var winnerBox = function (winner) {
  window.alert (winner + " wins! Press OK to play again.")

  $("td").removeClass("active");
  $("#blue td:first").addClass("active");
  $("#red td:first").addClass("active");

  redMoves = 0;
  blueMoves = 0;
};