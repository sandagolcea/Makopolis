describe ("Bank", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });


  describe("storing questions", function(){

    it("should be able read the question", function(){
      expect(bank.questions(0)).toEqual('What is 2 + 2?');
    });

    it('should be able to provide list of answers', function() {
      spyOn(bank, 'choice1').and.returnValue([3, 5, 4, 2863]);
      expect(bank.choice1('1')).toEqual([3, 5, 4, 2863]);
    });

    it('should be able to provide THE answer', function() {
      spyOn(bank, 'correctAnswer').and.returnValue(4);
      expect(bank.correctAnswer('1')).toEqual(4);
    });

    it('should know when the player gets the correct answer', function() {
      expect(bank.verifyAnswer(0, 4)).toBe(true);
    });

    it('should know when the player gets the wrong answer', function(){
      expect(bank.verifyAnswer(0, 5)).toBe(false);
    });

    it('cannot display same question twice', function() {
      bank.deleteQuestion(2);
      expect(bank.questionBank.length).toEqual(5);
    });

  });

});