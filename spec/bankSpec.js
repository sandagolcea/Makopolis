describe ("Bank", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });


  describe("storing questions", function(){

    it("should be able read the question", function(){
      expect(bank.questions(1)).toEqual('Array = [’12’, ‘6’, ’15’, ’48’] What would be the way to calculate the average of all the elements?');
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
      expect(bank.verifyAnswer(1, '(array.inject(:+)/array.length.to_f).round')).toBe(true);
    });

    it('should know when the player gets the wrong answer', function(){
      expect(bank.verifyAnswer(0, 5)).toBe(false);
    });

    it('cannot display same question twice', function() {
      bank.deleteQuestion(2);
      expect(bank.questionBank.length).toEqual(8);
    });

  });

});