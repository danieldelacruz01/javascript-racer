

// keydown event
$(document).keyup(function(key){


  if (key.keyCode === 80) {

    console.log ("p");
    updatePlayerPosition(red);
    

  } else if (key.keyCode === 81) {

    console.log ("q");
    updatePlayerPosition(blue);


  };
});

var updatePlayerPosition = function (player) {
  var activeCell = $("#p" + player + " td.active");
  var moveCell = activeCell.next();

  activeCell.removeClass("active");
  moveCell.addClass("active");
};