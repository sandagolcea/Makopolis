describe ("Homepage", function(){
  before(function() {
    casper.start('http://localhost:5000/');
  });

  it('has a dice', function() {
    casper.then(function() {
      expect("body").to.include.text("Dice");
    });
  });

  it('has invisible questions to begin with', function() {
  	casper.then(function() {
  		 'ul[id="question-answers"]'.should.be.inDOM.and.not.be.visible;
  	});
  });

  it('has an image of sonic on load', function(){
  	casper.then(function() {
  		'img[id="mario"]'.should.be.inDOM.and.be.visible;
  	});
  });

  it('has a dice that changes when clicked', function() {
  	casper.then(function() {
  		this.mouse.click('#dice-container');
  		expect('body').to.not.include.text("Dice");
  	});
  });

  it('shows the questions when the dice is clicked', function(){
  	casper.then(function() {
  		this.mouse.click('#dice-container');
  		'ul[id="question-answers"]'.should.be.inDOM.and.be.visible;
  	});
  });

  // it('shows correct or wrong when you click on an answer', function(){
  // 	casper.then(function(){
  // 		this.mouse.click('#answer1');
  // 			expect('h3[id="question-text"]').to.contain.text("You're Wrong!!!!");
  // 	});
  // });

  	it('shows sonic on the first square on loading', function(){
  		casper.then(function() {
  			this.wait(1000, function(){
  				
  			});
  		});
  	});
});