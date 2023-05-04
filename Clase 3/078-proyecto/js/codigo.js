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
    // Tomo la URL del navegador
    const miurl = window.location.href;
    // Parto la URL en dos trozos, tomando el signo igual como separador
    partido = miurl.split("=")
    // En el caso de que el segundo elemento no exista
    if(partido[1] == null){
        // Pintame TODOS los artículos
        for(var i = 0;i<numerodearticulos;i++){
            document.getElementById("articulos").innerHTML += '<a href="?id='+i+'"><article><div class="imagen" style="background:url(\'imagenes/'+data.articulos[i].imagen+'\');background-size:cover;background-position:center center;"></div><time datetime="'+data.articulos[i].fecha+'">'+data.articulos[i].fecha+'</time><h4>'+data.articulos[i].titulo+'</h4><p>'+data.articulos[i].texto+'</p></article></a>'
        }
    }else{
        // Y en el caso de que SI que exista el signo igual
        // En ese caso pintame SOLO el articulo cuyo ID sea el id que hay en la url
         document.getElementById("video").remove();
        document.getElementById("articulos").innerHTML += '<article><div class="imagen" style="background:url(\'imagenes/'+data.articulos[partido[1]].imagen+'\');background-size:cover;background-position:center center;"></div><time datetime="'+data.articulos[partido[1]].fecha+'">'+data.articulos[partido[1]].fecha+'</time><h4>'+data.articulos[partido[1]].titulo+'</h4><p>'+data.articulos[partido[1]].texto+'</p><iframe  src="https://www.youtube.com/embed/jV3QQlpXYnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></article>'
        document.getElementById("articulos").style.paddingTop = "0px"
        document.getElementsByTagName("article")[0].style.width = "100%"
    }
    
    });