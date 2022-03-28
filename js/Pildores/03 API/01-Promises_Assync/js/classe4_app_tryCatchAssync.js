// Async Await 

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout( () => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('No se pudo aplicar el descuento');                
            }            
        }, 2000);

    });
}

// Async await
async function ejecutar() {
    try {
        // Deten la ejecución hasta que sea ejecutado...
        respuesta = await descargarClientes(); 
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}

ejecutar();
// Este código se continua ejecutando mientras que el await sigue esperando por su respuesta
console.log( 2 + 2); 