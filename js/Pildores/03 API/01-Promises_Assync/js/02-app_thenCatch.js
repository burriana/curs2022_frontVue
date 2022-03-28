function calculDescuento(valor) {
    console.log('Aplicando el Descuento...' + valor);
    return true;
}

// Vamos a definir un promise
const aplicarDescuento= valor => new Promise((resolve, reject) => { // Puede ser arrow function...
     // Comentar estas siguientes lineas para ver el Resolve...
    if(calculDescuento(valor)) {
        resolve('Descuento Aplicado'); 
    } else {
        reject('No se pudo aplicar el descuento');
    }
});

// En los Promises hay 3 valores posibles, 
// 1) pendiente, no se ha cumplido o rechazado...esperando
// 2) Fullfilled - se ha cumplido
// 3) Rejected - se ha recahzado o no se pudo cumplir
// recuerda que gracias a las ventajas de los  arrow functions puedes colocar todo en una sola linea...
aplicarDescuento(10)
    .then( resultado =>  {
        console.log("resultado: " + resultado);
    }).catch( error => {
        console.log("error capturado:" + error);
    });

console.log("Fin del programa")



