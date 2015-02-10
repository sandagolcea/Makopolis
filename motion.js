// javascript file for adding a motion move between squares
$(document).ready(function(){
  
  var position = document.getElementById(1).getBoundingClientRect();
  var mario = document.getElementById('mario').getBoundingClientRect();
  
  var x = ( position.right - (position.width/2) ) - (mario.width/2); 
  var y = (position.bottom - position.height/2) - (mario.height/2); 
  $('#mario').hide();
  $('#mario').css("top", y);
  $('#mario').css("left", x);
  $('#mario').fadeIn("slow");

  // Positioning testing purposes:
  // console.log("right: "+ position.right+" width: " + position.width+" mario width: "+ mario.width);
  // console.log("x : " + x);
  // console.log("y : " + y);


  $('#mario').click(function(){
      $(this).animate(
            { crSpline: $.crSpline.buildSequence([ [x,y], [0,100], [100,100], [100,0], [0,0], [x,y] ]) },
            5000
      );
  });

})

