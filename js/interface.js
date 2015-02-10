var question = new Question();

$(document).ready(function() {

  $('#question-text').text(question.ask(question.question1));

  $('.qs').on('click', function() {
    var value = parseInt($(this).attr("value"));
    if(question.answer(value)===true){
      alert("You're correct")
    }
    else {
      alert("You're wrong")
    };
  });



});