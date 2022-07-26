/*var canvas = document.getElementById("lienzo");
if (canvas && canvas.getContext) {
  var ctx = canvas.getContext("2d");
  if (ctx) {
    var arrastrar = false;
    var delta = new Object();
    var L = 5;
    var paso = 2;
    var R = 100;
    var X = canvas.width / 2;
    var Y = canvas.height / 2;

    function dibujarUnaEstrella(R, L, paso, X, Y) {

      ctx.fillStyle = "#6ab150";
      var estrella = L / paso
      var rad = (2 * Math.PI) / estrella;

      ctx.beginPath();
      for (var i = 0; i < L; i++) {
        x = X + R * Math.cos(rad * i);
        y = Y + R * Math.sin(rad * i);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }

    dibujarUnaEstrella(R, L, paso, X, Y);

    function oMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return { // devuelve un objeto
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top)
      };
    }

    canvas.addEventListener("mousedown", function(evt) {
      var mousePos = oMousePos(canvas, evt);

      dibujarUnaEstrella(R, L, paso, X, Y);
      if (ctx.isPointInPath(mousePos.x, mousePos.y)) {
        arrastrar = true;
        delta.x = X - mousePos.x;
        delta.y = Y - mousePos.y;
      }
    }, false);

    canvas.addEventListener("mousemove", function(evt) {
      var mousePos = oMousePos(canvas, evt);

      if (arrastrar) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        X = mousePos.x + delta.x, Y = mousePos.y + delta.y

        dibujarUnaEstrella(R, L, paso, X, Y);
      }
    }, false);

    canvas.addEventListener("mouseup", function(evt) {
      arrastrar = false;
    }, false);
  }
}
*/



/* Nuevo juego */
let arreglo = ["","",""];

function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){

  if (arreglo[parseInt(ev.target.id)] == ""){

    var data = ev.dataTransfer.getData("text");

    arreglo[parseInt(ev.target.id)] = data;

    ev.target.appendChild(document.getElementById(data));
  }

  if (arreglo[0] != "" && arreglo[1] !="" && arreglo[2] !=""){
    if (arreglo[0] == "pelota" && arreglo[1] == "dinosaurio" && arreglo[2] == "paragua" ){
      document.querySelector("h1").innerHTML = "MUY BIEN!!";
    }else{
      document.querySelector("h1").innerHTML = "INTENTE DE NUEVO";
    }
  }
}


