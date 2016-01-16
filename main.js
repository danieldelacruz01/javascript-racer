$(document).ready(function(){
  //start state
  var redMoves = 0;
  var blueMoves = 0;

  var trackLength = prompt("How long do you want the track to be?", "Set a track length between 10 - 30");
  console.log (trackLength);


  var restart = function() {
    $("td").removeClass("active");
    $("#blue td:first").addClass("active");
    $("#red td:first").addClass("active");

    redMoves = 0;
    blueMoves = 0;
  };

    for (var i = 1; i <= trackLength; i++) {
      console.log(i);
      $(".track").append("<td>");
    };

  restart();

  // keydown event
  $(document).on('keyup', function(key){

    if (key.keyCode === 80) {

      if (redMoves < trackLength - 1){
        updatePlayerPosition("red");
        redMoves++;
      } else {
        winnerBox("Red")
      };

    } else if (key.keyCode === 81) {

      if (blueMoves < trackLength - 1){
        updatePlayerPosition("blue");
        blueMoves++;

      } else {
        winnerBox("Blue")
      };
    };
  });

  //move active td
  var updatePlayerPosition = function (playerColor) {
    var activeCell = $("#" + playerColor + " td.active");
    var moveCell = activeCell.next();

    activeCell.removeClass("active");
    moveCell.addClass("active");
  };

  //winning state
  var winnerBox = function (winner) {
    window.alert (winner + " wins! Press OK to play again.")
    restart();

  };
});