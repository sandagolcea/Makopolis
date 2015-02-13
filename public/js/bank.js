var Bank = function(){

 this.questionBank = [

   ["Array = [‘Jon’, ‘Bob’, ‘Dave’, ‘Steve’] What would be the way to reverse every element in the array?" [ 'array.map{|name| name.reverse}', 'array.each do{|name| name.reverse}', 'array.reverse', 'array.select{|name| name.reverse}'], 'array.map{|name| name.reverse}'],
   ["Array = [’12’, ‘6’, ’15’, ’48’] What would be the way to calculate the average of all the elements?", ['array.inject', 'array.select{|number| number + number}/array', '(array.inject(:+)/array.length.to_f).round', '(array.join)/array'], '(array.inject(:+)/array.length.to_f).round' ],
   ["What would you use to enclose an array?", ['\{ \}', '\* \*', '\[ \]', '\| \|'], '\[ \]'],
   ["What would you use to enclose a hash?", ['\{ \}', '\* \*', '\[ \]', '\| \|'], '\{ \}'],
   ["In Ruby, what does the .compact method do?", ['Remove all true values', 'Remove all false values', 'remove all values', 'remove all nils'], 'remove all nils'],
   ["In Ruby, what does the .to_s method do?", ['convert an object into an integer', 'convert an object into a string', 'convert an object into a float', 'convert an object into a symbol'], 'convert an object into a string'],
   ["What does the L stand for in the SOLID principles?", ['Library dependence', 'The Luke Clewlow Principle', 'Liability Principle', 'Leskov Substitution Principle'], 'Leskov Substitution Principle'],
   ["How would you round up a floating point number?", ['.ceil', '.floor', '.roundup', '.round'], '.ceil'],
   ["Array = [‘Dave’, ‘Jim’, ‘Bob’, ‘Tom’] How would you gather all combinations of two people together?", ['array.shuffle', 'array.join{|name| name.combination}', 'array.select{|name| name.shuffle}', 'array.combination(2)'], 'array.combination(2)']
 
 ];

 this.randomQuestion = 1;

};

Bank.prototype.questions = function(questionNumber){
 var questionArray = this.questionBank[questionNumber];
 return questionArray[0];
};

Bank.prototype.choice1 = function(questionNumber){
 var questionArray = this.questionBank[questionNumber];
 var questionArrayChoice = questionArray[1];
 return questionArrayChoice[0];
};

Bank.prototype.choice2 = function(questionNumber){
 var questionArray = this.questionBank[questionNumber];
 var questionArrayChoice = questionArray[1];
 return questionArrayChoice[1];
};

Bank.prototype.choice3 = function(questionNumber){
 var questionArray = this.questionBank[questionNumber];
 var questionArrayChoice = questionArray[1];
 return questionArrayChoice[2];
};

Bank.prototype.choice4 = function(questionNumber){
 var questionArray = this.questionBank[questionNumber];
 var questionArrayChoice = questionArray[1];
 return questionArrayChoice[3];
};

Bank.prototype.correctAnswer = function(questionNumber){
 var questionArray = this.questionBank[questionNumber];
 return questionArray[2];
};

Bank.prototype.verifyAnswer = function(questionNumber, playersChoice){
  return (this.correctAnswer(questionNumber) == playersChoice);
};

Bank.prototype.deleteQuestion = function(questionNumber) {
 this.questionBank.splice(questionNumber, 1);
};

Bank.prototype.randomChecker = function() {
 this.randomQuestion = Math.floor((Math.random() * 3));
};