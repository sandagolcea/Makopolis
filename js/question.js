var Question = function() {
	 this.question1 = "What is 2+2?";
	 this.question2 = "What is the meaning of Life?"
};

Question.prototype.ask = function(question) {
	return question;
};

Question.prototype.answer = function(answer){
	if (answer === 4){
		return true
	}
	else {
		return false
	};

};