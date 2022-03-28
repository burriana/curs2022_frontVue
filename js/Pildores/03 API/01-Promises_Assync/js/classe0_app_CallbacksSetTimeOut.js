// Listado de paises
//const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];


// SINCRON
// Exercici 1: Los paises se muestran despues de 1 segundo
const paises=[];

function anadirPaises(pais) {
    paises.push(pais)
}

anadirPaises("inglaterra"); 
anadirPaises("paris"); 
anadirPaises("londres"); 


// ASSINCRON
// Exercici 2: Afegir un Pais a un array, 
// Un nuevo pais se agrega despues de 2 segundos...
/* function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 1000); // Pero el segundo ya paso, y se agrega uno nuevo, ejecutamos el callback para que se vuelva a llamar la función
}

// Agregar nuevo pais
nuevoPais('Alemania', nuevoPais); // mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...
 */
