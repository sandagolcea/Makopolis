// javascript file for adding a motion move between squares
$(document).ready(function(){

  var mario = document.getElementById('mario').getBoundingClientRect();

  var position = document.getElementById('sq1').getBoundingClientRect();
  var x = (position.right - (position.width/2) ) - (mario.width/2);
  var y = (position.bottom - position.height/2) - (mario.height/2);

  $('#mario').hide();
  $('#mario').css("top", y);
  $('#mario').css("left", x);
  $('#mario').fadeIn("slow");

  var position2 = document.getElementById('sq2').getBoundingClientRect();
  var x2 = (position2.right - (position2.width/2) ) - (mario.width/2);
  var y2 = (position2.bottom - position2.height/2) - (mario.height/2);

  // Positioning testing purposes:
  // console.log("right: "+ position.right+" width: " + position.width+" mario width: "+ mario.width);
  // console.log("x : " + x);
  // console.log("y : " + y);

  $('#mario').click(function(){
    $(this).animate(
          { crSpline: $.crSpline.buildSequence([ [x,y], [x2,y2], ]) },
          5000
    );
  });

})

