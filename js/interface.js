$(document).ready(function() {

  var question = new Question();

  // $('#question-answers').fadeIn(2000);
  $('#dice').on('click', function() {
    $('#question-answers').slideToggle("slow");
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
    var value = parseInt($(this).attr("value"));
    if(question.answer(value, question.question1CorrectAnswer)===true){
      $('#question-text').text("Correct!!!!")
    }
    else {
      $('#question-text').text("Your Wrong!!!!")
    };
  });

});