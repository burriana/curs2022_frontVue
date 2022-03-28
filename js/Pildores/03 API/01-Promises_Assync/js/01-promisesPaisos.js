// callback hell to promise...
const paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`)
    }, 3000);
});


nuevoPais('Alemania')
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPai('');
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises);
        return nuevoPais("Portugal");
    })
    .then(resultado => {
        console.log(resultado)
        console.log(paises);
    })
    .catch ( error => {
        console.log("Hi ha hagut un error no controlat:" + error);
    });

console.log("contimuamos")