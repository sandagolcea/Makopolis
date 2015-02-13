var Player = function(playerID){
  this.marioBounds = document.getElementById(playerID).getBoundingClientRect();
  var pos = this.calculateIconPosition('sq1');
  var x = pos[0];
  var y = pos[1];
  // put the icon on the first square
  this.id = "#"+playerID;
  $(this.id).hide();
  $(this.id).css("top", y);
  $(this.id).css("left", x);
  $(this.id).fadeIn("slow");
  this.lastVisitedSquare = 1;
 };


 
 Player.prototype.move = function(diceRoll) {
  console.log("Last visited square: "+this.lastVisitedSquare);
  var start = this.lastVisitedSquare;
  var end = diceRoll + start - 1;
  var last = $('.square').length;
  end = end > last ? last : end;

  for(var i = start; i <= end; i++) {
    var that = this;
    $(this.id).animate(
      { crSpline: $.crSpline.buildSequence([ this.calculateIconPosition('sq' + i), this.calculateIconPosition('sq' + (i + 1)) ]) },
    500, function(){
        that.lastVisitedSquare++;
        that.checkWinner();
      }
    );
   };
 };

 Player.prototype.checkWinner = function() {
  if ( this.lastVisitedSquare >= $('.square').length )  {
    // alert("You have won the game! Congratulations, your life is now complete!");
    $('#endBanner').animate(
      { crSpline: $.crSpline.buildSequence([ [1200,400], [400,400] ]) }, 5000);
  };
 };


 Player.prototype.calculateIconPosition = function(squareID) {
  var square = document.getElementById(squareID);
  if (!square) {
    return null;
  }

  var position = square.getBoundingClientRect();
  var x = (position.right - (position.width/2) ) - (this.marioBounds.width/2);
  var y = (position.bottom - position.height/2) - (this.marioBounds.height/2);
  return [x,y];
 };

