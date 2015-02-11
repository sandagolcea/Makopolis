var Question = function() {
	 this.question1 = "What is 2+2?";
	 this.question1Choices = [ 3, 5, 4, 2863 ];
	 this.question1CorrectAnswer = 4;
	 
	 this.question2 = "What is the meaning of Life?";
};

Question.prototype.ask = function(question) {
	return question;
};

Question.prototype.answer = function(answer, correctAnswer){
	return (answer === correctAnswer);
};