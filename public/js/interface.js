$(document).ready(function() {

  var dice = new Dice();
  var bank = new Bank();
  $(bank.randomChecker());

  $('#dice').on('click', function() {
    $('#question-answers').slideToggle("slow");
  });

  $('#dice').on('click', function() {
    $(this).text(dice.rollDice());
    $(bank.randomChecker());
    $('#question-text').text(bank.questions(bank.randomQuestion)).toString(); 
    $('#answer1').val(bank.choice1(bank.randomQuestion)).toString();
    $('#answer2').val(bank.choice2(bank.randomQuestion)).toString();
    $('#answer3').val(bank.choice3(bank.randomQuestion)).toString();
    $('#answer4').val(bank.choice4(bank.randomQuestion)).toString();
  });

  $('[id^=answer]').on('click', function() {
    $('#question-answers').delay(800).slideToggle("slow");
  });

  $('#question-text').text(bank.questions(bank.randomQuestion)).toString();

 

  $('.qs').on('click', function() {
    var questionChoiceOption = parseInt($(this).attr("value"));
    if(bank.verifyAnswer(bank.randomQuestion.toString()), questionChoiceOption){
      $('#question-text').text("Correct!!!!");
    }
    else {
      $('#question-text').text("You're Wrong!!!!");
    }
  });

});