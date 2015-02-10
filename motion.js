// this js is for adding a motion move between squares
$(document).ready(function(){
  // checking that jquery works!!
  console.log("Ready to go!!");
  // moving Mario 50px
  // $('#mario').animate({top: "+=50px"}, 'slow');


  var position = document.getElementById(1).getBoundingClientRect();
  
  var top1 = position.top; 
  var bottom1 = position.bottom; 


  var position = document.getElementById(2).getBoundingClientRect();
  var top2 = position.top; 
  var bottom2 = position.bottom; 


  $('#mario').click(function(){
      $(this).animate(
            { crSpline: $.crSpline.buildSequence([ [top1, bottom1], [0, 50], [top1, bottom1], [80, 50], [top2, bottom2] ]) },
            5000
      );
  });

})

