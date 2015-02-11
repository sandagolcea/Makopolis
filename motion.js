// javascript file for adding a motion move between squares
$(document).ready(function(){

  var question = new Question();

  var mario = document.getElementById('mario').getBoundingClientRect();

  var pos = calculateIconPosition('sq1');
  var x = pos[0];
  var y = pos[1];

  var lastVisitedSquare = 1;

  // putting our image in the initial position
  $('#mario').hide();
  $('#mario').css("top", y);
  $('#mario').css("left", x);
  $('#mario').fadeIn("slow");

  // Initial dice roll
  var diceRoll = 3;
  // TODO: make dice roll dynamic

  $('.qs').on('click', function() {
   var value = parseInt($(this).attr("value"));

   if(question.answer(value, question.question1CorrectAnswer)===true){
      var start = lastVisitedSquare;
      console.log(start);
      for(var i = start; i <= diceRoll + start -1; i++) {
        $('#mario').animate(
          { crSpline: $.crSpline.buildSequence([ calculateIconPosition('sq' + i), calculateIconPosition('sq' + (i + 1)) ]) },
          2000
        );
        lastVisitedSquare = i + 1;
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

