// javascript file for adding a motion move between squares
$(document).ready(function(){

  var question = new Question();

  var mario = document.getElementById('mario').getBoundingClientRect();

  var position = document.getElementById('sq1').getBoundingClientRect();
  var x = (position.right - (position.width/2) ) - (mario.width/2);
  var y = (position.bottom - position.height/2) - (mario.height/2);

  // putting our image in the initial position
  $('#mario').hide();
  $('#mario').css("top", y);
  $('#mario').css("left", x);
  $('#mario').fadeIn("slow");

  // Initial dice roll
  var diceRoll = 5;
  // TODO: make dice roll dynamic

  $('.qs').on('click', function() {
   var value = parseInt($(this).attr("value")); 

   if(question.answer(value, question.question1CorrectAnswer)===true){
      start = 2;
      stop = diceRoll+1;
    
      for(var i = start; i <= stop; i++) {

        var position2 = document.getElementById('sq'+i).getBoundingClientRect();
        var x2 = (position2.right - (position2.width/2) ) - (mario.width/2);
        var y2 = (position2.bottom - position2.height/2) - (mario.height/2);

        $('#mario').animate(
          { crSpline: $.crSpline.buildSequence([ [x,y], [x2,y2], ]) },
          5000
        );
        x=x2; y=y2;
      }
    };
  });

})

