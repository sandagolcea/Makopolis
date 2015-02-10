$(document).ready(function() {

  var question = new Question();


  $('#qwerty').fadeIn(2000);
  

    
  $('#question-text').text(question.ask(question.question1));

  $('#answer1').val(question.question1Choices[0]);
  $('#answer2').val(question.question1Choices[1]);
  $('#answer3').val(question.question1Choices[2]);
  $('#answer4').val(question.question1Choices[3]);

  $('.qs').on('click', function() {
    var value = parseInt($(this).attr("value"));
    // alert(value);
    if(question.answer(value, question.question1CorrectAnswer)===true){
      alert("You're correct")
    }
    else {
      alert("You're wrong")
    };
  });

});