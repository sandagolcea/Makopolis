// javascript file for adding a motion move between squares
$(document).ready(function(){

  var question = new Question();

  var mario = document.getElementById('mario').getBoundingClientRect();

  var pos = calculateIconPosition('sq1');
  var x = pos[0];
  var y = pos[1];

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

        var pos2 = calculateIconPosition('sq' + i);
        var x2 = pos2[0];
        var y2 = pos2[1];

        $('#mario').animate(
          { crSpline: $.crSpline.buildSequence([ [x,y], [x2,y2], ]) },
          5000
        );
        x=x2; y=y2;
      }
    };
  });

   function calculateIconPosition(squareID) {
    var position = document.getElementById(squareID).getBoundingClientRect();
    var x = (position.right - (position.width/2) ) - (mario.width/2);
    var y = (position.bottom - position.height/2) - (mario.height/2);
    return [x,y]
  }

})

