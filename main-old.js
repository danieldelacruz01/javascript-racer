$(document).ready(function(){
  //start state
  var redMoves = 0;
  var blueMoves = 0;

  var trackLength = prompt("How long do you want the track to be?", "Set a track length between 10 - 30");

  while (trackLength < 10 || trackLength > 30 || isNaN(trackLength)) {
    var newTrackLength = prompt("You didn't enter a number between 10 - 30!", "20");
    trackLength = newTrackLength;
  };

  for (var i = 1; i <= trackLength; i++) {
      console.log(i);
      $(".track").append("<td>");
    };

  var restart = function() {
    $("td").removeClass("active");
    $("#blue td:first").addClass("active");
    $("#red td:first").addClass("active");

    redMoves = 0;
    blueMoves = 0;
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


set global variables
trackLength - 100 moves
trackwidth
timer 
obstacles - math.random()

game start
  start timer


while trackLength is less than 100

  on keyup (up key) {
    prepend tr td /td td /td td /td td /td /tr
    set next tr class active
    remove previous tr class active

  }

  if tr.next has class obstacle {
    end game
    alert game over
  }
