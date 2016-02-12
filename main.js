$(window).load(function() {
  $("html, body").animate({ scrollTop: $(document).height()}, 1000);
});

$(document).ready(function(){
  var trackLength = 0;
  var moveCount = 0;

  var setTrackLength = function(){
    for (var i = 0; i <= 100; i++) {
      if (i < 100) {
        $("#track").prepend(
            "<tr><td class='cell one'></td><td class='cell two'></td><td class='cell three'></td><td class='cell four'></td></tr>"
        );
        trackLength++
      } else if (i === 100) {
        $("#track").prepend(
            "<tr><td colspan='4'>Finish</td></tr><tr><td class='finish'></td><td class='finish'></td><td class='finish'></td><td class='finish'></td>"
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
        var playAgain = confirm("You crashed and died!\n\nPlay again?\n");
        if (playAgain == true) {
          location.reload();
        } else if (playAgain == false){
          window.open("http://www.lifehacker.com/top-10-ways-to-become-a-better-driver-1596820145", "_self");
        }
      } else if ($("td.active").hasClass("finish")) {
        alert("Nice one!\n\nYou finished in " + " seconds\n\nPress OK to play again.")
        location.reload();
      }
    });
    $('table#track > tbody td').keynavigator();
  };

  setTrackLength();
  createObstacles();
  startGame();

});