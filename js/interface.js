$(document).ready(function() {

  var question = new Question();
  var dice = new Dice();

  // $('#question-answers').fadeIn(2000);
  $('#dice').on('click', function() {
    $('#question-answers').slideToggle("slow");
  });

  $('#dice').on('click', function() {
    $(this).text(dice.rollDice());
  });

  $('[id^=answer]').on('click', function() {
    $('#question-answers').delay(800).slideToggle("slow");
  });

  $('#question-text').text(question.ask(question.question1));

  $('#answer1').val(question.question1Choices[0]);
  $('#answer2').val(question.question1Choices[1]);
  $('#answer3').val(question.question1Choices[2]);
  $('#answer4').val(question.question1Choices[3]);

  $('.qs').on('click', function() {
    var questionChoiceOption = parseInt($(this).attr("value"));
    if(question.answer(questionChoiceOption, question.question1CorrectAnswer)===true){
      $('#question-text').text("Correct!!!!");
    }
    else {
      $('#question-text').text("Your Wrong!!!!");
    }
  });

});