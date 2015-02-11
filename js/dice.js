var Dice = function(){
	
};

Dice.prototype.rollDice = function() {
	Math.floor((Math.random() * 6) + 1);
};