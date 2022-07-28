// Creaci ́on de un puntaje 0 al iniciar el juego
var score = 0;
// Creaci ́on de la variable etiqueta, para el score del puntaje
var scoreLabel;

function startGame() {
  // Asignaci ́on de puntale en la etiqueta scorelabel()
  scoreLabel = new createScoreLabel(10, 30);

  }


  /*
Funci ́on para la etiqueta del puntaje o marcador del juego
*/
function createScoreLabel(x, y) {
  this.score = 0;
  this.x = x;
  this.y = y;
  }


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}





