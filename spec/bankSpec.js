describe ("Bank", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });


  describe("storing questions", function(){

    it("should be able read the question", function(){
      expect(bank.questions(1)).toEqual('Array = [’12’, ‘6’, ’15’, ’48’] What would be the way to calculate the average of all the elements?');
    });

    it('should be able to provide the first answer choice', function() {
      bank.questions(1);
      expect(bank.choice1(1)).toEqual('array.inject');
    });

    it('should be able to provide the second answer choice', function() {
      bank.questions(1);
      expect(bank.choice2(1)).toEqual('array.select{|number| number + number}/array');
    });

    it('should be able to provide the third answer choice', function() {
      bank.questions(1);
      expect(bank.choice3(1)).toEqual('(array.inject(:+)/array.length.to_f).round');
    });

    it('should be able to provide the fourth answer choice', function() {
      bank.questions(1);
      expect(bank.choice4(1)).toEqual('(array.join)/array');
    });

    it('should be able to provide THE answer', function() {
      bank.questions(1);
      expect(bank.correctAnswer(1)).toEqual('(array.inject(:+)/array.length.to_f).round');
    });

    it('should know when the player gets the correct answer', function() {
      expect(bank.verifyAnswer(1, '(array.inject(:+)/array.length.to_f).round')).toBe(true);
    });

    it('should know when the player gets the wrong answer', function(){
      expect(bank.verifyAnswer(1, 'array.reverse')).toBe(false);
    });

    it('cannot display same question twice', function() {
      bank.deleteQuestion(2);
      expect(bank.questionBank.length).toEqual(19);
    });

  });

});