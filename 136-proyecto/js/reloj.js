var contexto = document.getElementById("lienzo").getContext("2d")
 var lado = 128
// Creo un temporizador
var temporizador = setTimeout("bucleReloj()",1000)
function bucleReloj(){
    // Borrame lo que habia antes
    contexto.clearRect(0,0,lado,lado)
    contexto.strokeStyle = "black"
    var fecha = new Date();

    // Toma el elemento que tiene el id lienzo, y dentro de él voy a pintar en 2d

    contexto.lineCap = "round"
    // Quiero controlar el grosor
    contexto.lineWidth = 4;
    // Inicio una linea
    contexto.beginPath()
    // Dibujo un circulo
    contexto.arc(lado/2,lado/2,lado/2-4,0,Math.PI*2)
    // Dibujo la linea
    contexto.stroke();

    // Dibujo las manecillas

    // Horas
    var horas = fecha.getHours()%12;
    var horasenradianes = (Math.PI*2/12)*horas
     contexto.strokeStyle = "red"
    contexto.lineWidth = 10;
    contexto.beginPath();
    // Muevo el cursor hacia un punto
    contexto.moveTo(lado/2,lado/2)
    // Creo una linea
    contexto.lineTo(
        lado/2+Math.cos(horasenradianes-Math.PI/2)*30,
        lado/2+Math.sin(horasenradianes-Math.PI/2)*30
                   );
    contexto.stroke();

    // Minutos
    var minutos = fecha.getMinutes();
    var minutosenradianes = (Math.PI*2/60)*minutos
     contexto.strokeStyle = "green"
    contexto.lineWidth = 5;
    contexto.beginPath();
    // Muevo el cursor hacia un punto
    contexto.moveTo(lado/2,lado/2)
    // Creo una linea
    contexto.lineTo(
        lado/2+Math.cos(minutosenradianes-Math.PI/2)*40,
        lado/2+Math.sin(minutosenradianes-Math.PI/2)*40);
    contexto.stroke();

    // Segundos
    var segundos = fecha.getSeconds();
    console.log(segundos)
    var segundosenradianes = (Math.PI*2/60)*segundos
    console.log(segundosenradianes)
     contexto.strokeStyle = "blue"
    contexto.lineWidth = 2;
    contexto.beginPath();
    // Muevo el cursor hacia un punto
    contexto.moveTo(lado/2,lado/2)
    // Creo una linea
    contexto.lineTo(
        lado/2+Math.cos(segundosenradianes-Math.PI/2)*60,
        lado/2+Math.sin(segundosenradianes-Math.PI/2)*60
    );
    contexto.stroke();

    // Creo el eje de las manecillas
    contexto.fillStyle ="black"
    contexto.beginPath()
    contexto.arc(lado/2,lado/2,10,0,Math.PI*2)
    contexto.fill();
    contexto.closePath()
    // Borro el temporizador anterior
    clearTimeout(temporizador)
    // Creo un nuevo temporizador
    temporizador = setTimeout("bucleReloj()",1000)
}