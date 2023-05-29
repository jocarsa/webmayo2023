document.getElementById("hamburguesa").onclick = function(){
    console.log("Has hecho click en la hamburguesa")
    var elementos = document.getElementsByTagName("li")
    console.log(elementos)
    for(var i = 0;i<elementos.length;i++){
        elementos[i].style.display = "block"
    }
}