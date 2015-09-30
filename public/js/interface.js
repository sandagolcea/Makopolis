function initialize(id, socket) {

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

   var player = new Player(id);
   var localId = id;
   console.log(id);

    $('.qs').on('click', function() {
      var diceRoll = parseInt($('#dice').text());
      var questionChoiceOption = ($(this).attr("value"));

      if(bank.verifyAnswer(1, questionChoiceOption) == true){
        player.move(diceRoll);

        // updates other players with dice data
        console.log("ID is: "+localId);
        socket.emit('syncPlayers',{data: localId, steps: diceRoll});
      }

      bank.deleteQuestion(1);
    });

  });
}
