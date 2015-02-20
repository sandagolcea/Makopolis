$(document).ready(function() {

 var dice = new Dice();
 var bank = new Bank();
 $(bank.randomChecker());

 $('#dice').on('click', function() {
   $('#question-answers').slideToggle("slow");
   $(this).text(dice.rollDice());
   $(bank.randomChecker());
   $('#question-text').text(bank.questions(1));
   $('#answer1').val(bank.choice(1, 0));
   $('#answer2').val(bank.choice(1, 1));
   $('#answer3').val(bank.choice(1, 2));
   $('#answer4').val(bank.choice(1, 3));
 });

 $('#question-text').text(bank.questions(1));

 $('.qs').on('click', function() {
   var questionChoiceOption =($(this).attr("value"));
   if(bank.verifyAnswer(1, questionChoiceOption) === true){
     $('#question-text').text("Correct!!!!");
     $('#question-answers').delay(1000).slideToggle("slow");
   }
   else {
     $('#question-text').text("You're Wrong!!!!");
     $('#question-answers').delay(1000).slideToggle("slow");
   }
 });

 var player = new Player("mario");

  $('.qs').on('click', function() {
    var diceRoll = parseInt($('#dice').text());
    var questionChoiceOption = ($(this).attr("value"));

    if(bank.verifyAnswer(1, questionChoiceOption) === true){
      player.move(diceRoll);
    }

    bank.deleteQuestion(1);
  });

});