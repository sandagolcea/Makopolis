var http = require('http');


var express = require('express');
var app = express();

var server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get('/', function(request, response){
  response.render('index');
});


server.listen(3000, function(){
  console.log("Up and running on localhost:3000")
});
