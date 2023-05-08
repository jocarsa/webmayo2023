// Primero defino una variable booleana
var oculto = true
// Cuando hago click sobre la hamburguesa
document.getElementById("hamburguesa").onclick = function(){
    console.log("Has hecho click en la hamburguesa")
    // Tomo todos los elementos li
    var elementos = document.getElementsByTagName("li")
    console.log(elementos)
    // En el caso de que esten ocultos
    if(oculto == true){
        // Los tomos uno a uno
        for(var i = 0;i<elementos.length;i++){
            // Y los muestro
            elementos[i].style.display = "block"
        }
        // Y cambio el estado de la variable
        oculto = false;
    }else{
        // En el caso de que esten mostrados
        // Los tomo uno a uno
        for(var i = 1;i<elementos.length;i++){
            // Y los oculto
            elementos[i].style.display = "none"
        }
        // Y cambio el estado de la variable
        oculto = true;
    }
}