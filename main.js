$(document).ready(function(){
  var trackLength = 0;
  var moveCount = 0;

  var setTrackLength = function(){
    for (var i = 0; i <= 100; i++) {
      if (i > 3 && i < 100) {
        $("#track").prepend(
            "<tr><td class='cell one'></td><td class='cell two'></td><td class='cell three'></td><td class='cell four'></td></tr>"
        );
        trackLength++
      } else if (i === 100) {
        $("#track").prepend(
            "<tr><td colspan='4'>Finish</td></tr>"
        );
      }
    };
  };

  var createObstacles = function() {
    $("td.cell").each(function() {
      var obstacleNumber = Math.floor(Math.random() * 12 + 1);
      if (obstacleNumber === 1) {
        $(this).addClass("obstacle");
      }
    });
  };

  var startGame = function() { 
    $(document).on('keydown', function(key){
      if (key.keyCode === 38) {
        moveCount++;
        if (moveCount > 5) {
          window.scrollBy(0, -50);
        }
      };
      if ($("td.active").hasClass("obstacle")) {
        console.log("ouch");
      }
    });
    $('table#track > tbody td').keynavigator();
  };

  setTrackLength();
  createObstacles();
  startGame();
});