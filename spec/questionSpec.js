describe ("Question", function() {

  var question 

  beforeEach(function() {
    question = new Question();
  });
    
  describe("first question", function() {

    it("can ask a question", function() {
      expect(question.ask(question.question1)).toEqual("What is 2+2?");
    });

  });

  describe("defining the correct answer", function(){

  	it("knows if it's the right answer", function(){
  		expect(question.answer(4, question.question1CorrectAnswer)).toBe(true);
  	});

  	it("knows when the answer is wrong", function(){
  		expect(question.answer(3, question.question1CorrectAnswer)).toBe(false);
  	});

  });

});
