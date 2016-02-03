// $(document).ready(function(){
//   //start state
//   var playerMoves = 0;
//   var blueMoves = 0;
$(document).ready(function(){
  var trackLength = 4;
  
  var moveCount = 0;

  var setTrackLength = function(){

    while (trackLength <= 100) {
      $("#track").prepend(
          "<tr><td>Lane</td><td>Lane</td><td>Lane</td><td>Lane</td></tr>"
      );
      trackLength++
    };
  };

  var startGame = function() {
    
    $(document).on('keyup', function(key){
      if (key.keyCode === 38) {
        window.scrollBy(0, -53);
        moveCount++;
      };
    });
    $('table#track > tbody td').keynavigator();
  };

  setTrackLength();
  startGame();

});

//   for (var i = 1; i <= trackLength; i++) {
//       console.log(i);
//       $(".track").append("<td>");
//     };

//   var restart = function() {
//     $("td").removeClass("active");
//     $("#blue td:first").addClass("active");
//     $("#red td:first").addClass("active");

//     redMoves = 0;
//     blueMoves = 0;
//   };

    

//   restart();

//   // keydown event
//   $(document).on('keyup', function(key){

//     if (key.keyCode === 38) {

//       if (playerMoves < trackLength - 1){
//         updatePlayerPosition("red");
//         redMoves++;
//       } else {
//         winnerBox("Red")
//       };

//     } else if (key.keyCode === 81) {

//       if (blueMoves < trackLength - 1){
//         updatePlayerPosition("blue");
//         blueMoves++;

//       } else {
//         winnerBox("Blue")
//       };
//     };
//   });

//   //move active td
//   var updatePlayerPosition = function (playerColor) {
//     var activeCell = $("#" + playerColor + " td.active");
//     var moveCell = activeCell.next();

//     activeCell.removeClass("active");
//     moveCell.addClass("active");
//   };

//   //winning state
//   var winnerBox = function (winner) {
//     window.alert (winner + " wins! Press OK to play again.")
//     restart();

//   };
// });