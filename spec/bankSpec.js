describe ("Bank", function() {

  var bank; 

  beforeEach(function() {
    bank = new Bank();
  });


  describe("storing questions", function(){ß

  	it("should be able read the question", function(){
  		expect(bank.questions('1')).toEqual('What is 2 + 2?');
  	});

    it('should be able to provide list of answers', function() {
      expect(bank.choices('1')).toEqual([3, 5, 4, 2863]);
    });

    it('should be able to provide THE answer', function() {
      expect(bank.answer('1')).toEqual(4);
    });

    it('cannot display same question twice', function() {
      bank.questionUsed = ['1'];
      bank.questions('1');
      expect(questionArray[0]).toEqual('2');
    });

  });

});