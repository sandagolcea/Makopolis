var Bank = function(){

  this.questionBank = {

    '1':["What is 2 + 2?", [3, 5, 4, 2863], 4],
    '2':["What is 2 + 3?", [2, 3, 5, 8], 5]

  }

};

Bank.prototype.donMeth = function(){

};

Bank.prototype.questions = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  return questionArray[0];
};

Bank.prototype.choices = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  return questionArray[1];
};

Bank.prototype.answer = function(questionNumber){
  var questionArray = this.questionBank[questionNumber];
  return questionArray[2];
};