// javascript file for adding a motion move between squares
$(document).ready(function(){

  var bank = new Bank();
  var mario = document.getElementById('mario').getBoundingClientRect();

  // putting our image in the initial position
  var pos = calculateIconPosition('sq1');
  var x = pos[0];
  var y = pos[1];
  $('#mario').hide();
  $('#mario').css("top", y);
  $('#mario').css("left", x);
  $('#mario').fadeIn("slow");

  var lastVisitedSquare = 1;

  $('.qs').on('click', function() {
   var diceRoll = parseInt($('#dice').text());
   var questionChoiceOption = parseInt($(this).attr("value"));

   if(bank.verifyAnswer(bank.randomQuestion.toString()), questionChoiceOption){
      var start = lastVisitedSquare;
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

