// Compprobación de que todo va bien
console.log("Página web de Jose Vicente Carratalá")
// Tomo el archivo JSON y lo devuelvo por pantalla
fetch("json/articulos.json").then(function(e){
        return e.json();
    }).then(function(data){
       console.log(data)
    console.log("ahora voy a tomar los datos y los voy a poner en la web")
    var numerodearticulos = data.articulos.length
    console.log("En realidad tengo "+numerodearticulos+" articulos en el archivo JSON")
    for(var i = 0;i<=numerodearticulos;i++){
        document.getElementById("articulos").innerHTML += "Aquí va un artículo<br>"
    }
    /*
    <article>
                    <div class="imagen" style="background:url('imagenes/dibujantes%20(2).png');background-size:cover;background-position:center center;"></div>
                    <time datetime="2023-04-20"></time>
                    <h4></h4>
                    <p></p>
                </article>
                */
    });