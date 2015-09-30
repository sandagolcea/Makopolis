var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 5000 ;
var playerList = { };

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('index');
});

io.on('connection', function(socket) {
  console.log('Client connected');

  socket.emit("playerId", {data: socket.id});

  // broadcasts a message when a new user joins
  socket.broadcast.emit('newPlayer',{data: socket.id});
  socket.emit('existingPlayers', playerList);
  playerList[socket.id] = 0;

  // player did a move
  socket.on('syncPlayers', function(obj){
    console.log("I am in sync players: "+obj.steps);
    playerList[socket.id] = playerList[socket.id] + obj.steps;
    // broadcast a message when a user plays
    socket.broadcast.emit('syncClientSide',obj);
  });

  socket.on('disconnect', function () {
    delete playerList[socket.id];
    // sends a message to the rest of the players that this player is disconnected
    io.sockets.emit('playerOut',{userID: socket.id});
  });
})



server.listen(port, function(){
  console.log("Node app is running at localhost:" + port);
})