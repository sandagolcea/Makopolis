var http = require('http');


var express = require('express');
var app = express();

var server = http.createServer(app);

// getting the env port for heroku
app.set('port', (process.env.PORT || 5000))

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get('/', function(request, response){
  response.render('index');
});


// server.listen(3000, function(){
//   console.log("Up and running on localhost:3000")
// });
// modified prev 3 lines with next 3 for heroku purposes
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})