// Compprobación de que todo va bien
console.log("Página web de Jose Vicente Carratalá")
// Tomo el archivo JSON y lo devuelvo por pantalla
fetch("json/articulos.json").then(function(e){
        return e.json();
    }).then(function(data){
       console.log(data)
    });