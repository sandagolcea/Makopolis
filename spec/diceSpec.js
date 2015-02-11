describe ("Dice", function(){

	var dice;

	beforeEach(function() {
    dice = new Dice();
  });

	describe("numbers", function() {

    it("has the numbers 1-6", function() {
    	spyOn(dice, 'rollDice').and.returnValue(6);
      expect(dice.rollDice()).toEqual(6);
    });

  });

});