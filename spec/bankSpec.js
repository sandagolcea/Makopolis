describe ("Bank", function() {

  var bank; 

  beforeEach(function() {
    bank = new Bank();
  });


  describe("storing questions", function(){

  	it("should be able to store a questions", function(){
  		expect(bank.questionBank.length).toEqual(2);
  	});

  	// it("should be able read the question", function(){
  	// 	expect(bank.questions(bank.randomQuestion());
  	// });

  });

});