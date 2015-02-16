# Makopolis

##What is it?
Simple Board Game - with ruby questions
[Makopolis Live Version](makopolis.herokuapp.com)  (hosted on heroku)  

##code climate
[![Code Climate](https://codeclimate.com/github/sandagolcea/Makopolis/badges/gpa.svg)](https://codeclimate.com/github/sandagolcea/Makopolis)  
[![Test Coverage](https://codeclimate.com/github/sandagolcea/Makopolis/badges/coverage.svg)](https://codeclimate.com/github/sandagolcea/Makopolis)

##How to run
`git clone git@github.com:sandagolcea/Makopolis.git`  
`npm install`  
`foreman start` or `node server.js`  
go to `localhost:5000`  

###To run tests:
open SpecRunner.html

##screenshot
![Makopolis](/Makopolis.png?raw=true "Makopolis board game")

##Contributors
[Steph Oldcorn](https://github.com/stepholdcorn)  
[Oliver Lucas](https://github.com/olucas92)  
[Luke Clewlow](https://github.com/lukeclewlow)  
[Huy Le](https://github.com/tekhuy)  

##technologies
- javascript
- jquery
- html/css
- NODEjs, express
- testing: grunt, mocha, chai, casperjs, jasmine

##Possible Improvements
- multiplayer with sockets, turn implementation
- improve css display (numbers could be attached to SVG elements)
- could add a timer for the questions (e.g.: 10 sec/question)
- questions could be either from a github repo or transmitted in JSON format (hardcoded atm)
