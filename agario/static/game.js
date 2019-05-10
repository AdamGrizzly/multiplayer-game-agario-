var socket = io();
var movement = {
  up: false,
  down: false,
  left: false,
  right: false
}
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = true;
      break;
    case 87: // W
      movement.up = true;
      break;
    case 68: // D
      movement.right = true;
      break;
    case 83: // S
      movement.down = true;
      break;
  }
});
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
  }
});
function getRandomColor() {

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);

var letters = '0123456789ABCDEF';
var color = '#';
var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;

var context = canvas.getContext('2d');

socket.on('state', function(players) {
  context.clearRect(0, 0, 800, 600);
  for (var id in players) {

    var player = players[id];

    context.fillStyle =  color += letters[Math.floor(Math.random() * 16)];

    context.beginPath();

    context.arc(player.x, player.y, player.r, 10, 0, 2 * Math.PI);
    context.fill();
  }
 
});

