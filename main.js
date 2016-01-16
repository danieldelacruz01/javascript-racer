

// keydown event
$(document).keyup(function(key){

  var activeCell = $("td.active");
  var moveCell = activeCell.next();

  if (key.keyCode === 80) {

    console.log ("p");
    
    activeCell.removeClass("active");
    moveCell.addClass("active");

  } else if (key.keyCode === 81) {
    console.log ("q");
  };
});
