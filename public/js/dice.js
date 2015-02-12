var Dice = function(){
	
};

Dice.prototype.rollDice = function() {
	return Math.floor((Math.random() * 6) + 1);
};