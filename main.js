// $(document).ready(function(){
//   //start state
//   var playerMoves = 0;
//   var blueMoves = 0;
$(document).ready(function(){
  $('table#track > tbody td').keynavigator();

  var trackLength = 100;
  var moveCount = 0;

  // $(document).on("keyup", function(key){
  //   if (key.keyCode === 38) {
  //     updatePlayerPosition("up");
  //   } else if (key.keyCode === 37) {
  //     updatePlayerPosition("left");
  //   } else if (key.keyCode === 39) {
  //     updatePlayerPosition("right");
  //   }

  // });
  // $('tr.track-section td').keynavigator({
  //   activeClass: 'active',
  //   keys: {
  //     up_arrow: 'up',
  //     left_arrow: 'left',
  //     right_arrow: 'right',
  //   }
  // });

  var updatePlayerPosition = function (direction) {
    console.log (direction);
    // $('tr.track-section td').keynavigator({
    //   activeClass: 'active',
    //   keys: {
    //     w: 'up',
    //     a: 'left',
    //     s: 'down',
    //     d: 'right',
    //   }
    // });
  };


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