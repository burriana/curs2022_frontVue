// Exercici 3, Event al formulari: input
// ---------------------------------


const busqueda = document.querySelector('.busqueda');

// a) Afegeix un event perque ens mostri un alert cada vegada que escribim una lletra al formulari buscar.
/* busqueda.addEventListener('input', () => {
    alert('escribint...');
}) */


// b) Afegeix un event perque ens mostri un alert cada vegada que escribim la lletra a
/* busqueda.addEventListener('input', e => {
    if (e.target.value == 'a') {
        alert('Has escrit a...');
    }
})
 */
// c) El mateix que l'exercici 2, però ara fes servir una funció
busqueda.addEventListener('input', leerInput);

function leerInput(e) {
    if (e.target.value == 'a') {
        alert('Ha escrit a...');
    }

}