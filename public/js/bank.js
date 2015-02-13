var Bank = function(){

 this.questionBank = [

   ["Array = [‘Jon’, ‘Bob’, ‘Dave’, ‘Steve’] What would be the way to reverse every element in the array?", [ 'array.map{|name| name.reverse}', 'array.each do{|name| name.reverse}', 'array.reverse', 'array.select{|name| name.reverse}'], 'array.map{|name| name.reverse}'],
   ["Array = [’12’, ‘6’, ’15’, ’48’] What would be the way to calculate the average of all the elements?", ['array.inject', 'array.select{|number| number + number}/array', '(array.inject(:+)/array.length.to_f).round', '(array.join)/array'], '(array.inject(:+)/array.length.to_f).round' ],
   ["What would you use to enclose an array?", ['\{ \}', '\* \*', '\[ \]', '\| \|'], '\[ \]'],
   ["What would you use to enclose a hash?", ['\{ \}', '\* \*', '\[ \]', '\| \|'], '\{ \}'],
   ["In Ruby, what does the .compact method do?", ['Remove all true values', 'Remove all false values', 'remove all values', 'remove all nils'], 'remove all nils'],
   ["In Ruby, what does the .to_s method do?", ['convert an object into an integer', 'convert an object into a string', 'convert an object into a float', 'convert an object into a symbol'], 'convert an object into a string'],
   ["What does the L stand for in the SOLID principles?", ['Library dependence', 'The Luke Clewlow Principle', 'Liability Principle', 'Leskov Substitution Principle'], 'Leskov Substitution Principle'],
   ["How would you round up a floating point number?", ['.ceil', '.floor', '.roundup', '.round'], '.ceil'],
   ["Array = [‘Dave’, ‘Jim’, ‘Bob’, ‘Tom’] How would you gather all combinations of two people together?", ['array.shuffle', 'array.join{|name| name.combination}', 'array.select{|name| name.shuffle}', 'array.combination(2)'], 'array.combination(2)']
   ["How would you add an element to the beginning of an array?", ['array.unshift(element)', 'array.shift(element)', 'array.append(element)', 'array.prepend(element'], 'array.unshift(element)'],
   ["How would you convert an array into a hash?", ['array => hash', 'hash[array]', 'hash << array', 'Hash[*array]'], 'Hash[*array]'],  
   ["How would you swap keys and values in a hash?", ['hash[key] <=> value', 'hash.invert', 'hash.swap(key, value)', 'hash[key] = value'], 'hash.invert'],
   ["How do you add all numbers in an array?", ['array.inject{|sum,x| sum + x }', 'array.map{|sum,x| sum + x }', 'array.select{|sum,x| sum + x }', 'array.each{|sum,x| sum + x }'], 'array.inject{|sum,x| sum + x }'],
   ["How would you discard the first 3 elements of an array?", ['array.delete(3)', 'array.get_rid(3)', 'array.drop(3)', 'array.erase(3)'], 'array.drop(3)'],
   ["Given an array of elements, how do you give every possible pairing into an array?", ['array.pair', 'array.combination.to_a', 'array.pair.to_a', 'array.combination(2).to_a'], 'array.combination(2).to_a'],
   ["How would you remove instances of nil and false from an array?", ['array.remove(nil, false)', 'array.delete(nil, false)', 'array.select(String)', 'array.grep(String)'], 'array.grep(String)'], 
   ["How do you reverse an array?", ['array.each { |word| word.reverse! }', 'array.map { |word| word.reverse! }', 'array.select { |word| word.reverse! }', 'array.inject { |word| word.reverse! }'], 'array.each { |word| word.reverse! }'],
   ["Which option will return true?", ['(true && false) || (false && false)', '(true && false) && (false && false)', '(true && true) && (false && true)', '(true && true) && (false || true)'], '(true && true) && (false || true)'], 
   ["Which option will return false?", ['3 < 4 && 5 < 2', '3 <= 4 && 5 > 2', '3 == 4 || 5 > 2', '3 == 4 || 2 == 2'], '3 < 4 && 5 < 2'],
   ["Which option will return true?", ['100 > 1 && 199 < 299', '100 < 1 && 199 < 299', '100 < 1 || 199 > 299', '213 > 314 || 87 < 63'], '100 > 1 && 199 < 299']
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