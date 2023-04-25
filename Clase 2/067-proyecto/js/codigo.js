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
    for(var i = 0;i<numerodearticulos;i++){
        document.getElementById("articulos").innerHTML += '<article><div class="imagen" style="background:url(\'imagenes/'+data.articulos[i].imagen+'\');background-size:cover;background-position:center center;"></div><time datetime="'+data.articulos[i].fecha+'">'+data.articulos[i].fecha+'</time><h4>'+data.articulos[i].titulo+'</h4><p>'+data.articulos[i].texto+'</p></article>'
    }
    
    });