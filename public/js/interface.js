$(document).ready(function() {

  var dice = new Dice();
  var bank = new Bank();
  $(bank.randomChecker());

  $('#dice').on('click', function() {
    $('#question-answers').slideToggle("slow");
    $('#question-answers').delay(20000).slideToggle("slow");
  });

  $('#dice').on('click', function() {
    $(this).text(dice.rollDice());
    $(bank.randomChecker());
    $('#question-text').text(bank.questions(1));
    $('#answer1').val(bank.choice1(1));
    $('#answer2').val(bank.choice2(1));
    $('#answer3').val(bank.choice3(1));
    $('#answer4').val(bank.choice4(1));
  });

  $('#question-text').text(bank.questions(1));

  $('.qs').on('click', function() {
    var questionChoiceOption =($(this).attr("value"));
    if(bank.verifyAnswer(1, questionChoiceOption) == true){
      $('#question-text').text("Correct!!!!");
      $('#question-answers').delay(1000).slideToggle("slow");
    }
    else {
      $('#question-text').text("You're Wrong!!!!");
      $('#question-answers').delay(1000).slideToggle("slow");
    }
  });

  //*** This is where to motion code starts ***
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
   var questionChoiceOption = ($(this).attr("value"));

   if(bank.verifyAnswer(1, questionChoiceOption) == true){
      var start = lastVisitedSquare;
      for(var i = start; i <= diceRoll + start -1; i++) {
        $('#mario').animate(
          { crSpline: $.crSpline.buildSequence([ calculateIconPosition('sq' + i), calculateIconPosition('sq' + (i + 1)) ]) },
          500
        );
        lastVisitedSquare = i + 1;
      }
      if(lastVisitedSquare >= $('.square').length) {
       alert("You have won the game! Congratualtions, your life is now complete!")
    };
  };
    bank.deleteQuestion(1);
  });
  //*** End of motion code ***
  
  function calculateIconPosition(squareID) {
    var position = document.getElementById(squareID).getBoundingClientRect();
    var x = (position.right - (position.width/2) ) - (mario.width/2);
    var y = (position.bottom - position.height/2) - (mario.height/2);
    return [x,y]
  }


});