describe ("Homepage", function(){
  before(function() {
    casper.start('http://localhost:5000/');
  });

  it('has a dice', function() {
    casper.then(function() {
      expect('body').to.include.text('Dice');
    });
  });


});