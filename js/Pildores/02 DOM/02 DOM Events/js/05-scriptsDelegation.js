// Exercici 6, delegation
// ---------------------------------
/* Com hem vist, la següent variable recull información de la primera card
   const cardDiv = document.querySelector('.card');

   Captura l’event click, per cada una de les classes: categoria concierto, titulo, precio.
   Fes servir les delegacions, per controlar els events
*/

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (event) => {
    let element = event.target.className;

    switch (element) {
        case 'categoria concierto':
            console.log('categoria concierto');
            event.stopPropagation();
            break;
        case 'precio':
            console.log('precio');
            event.stopPropagation();
            break;
        case 'titulo':
            console.log('titulo');
            event.stopPropagation();
            break;
        default:
            console.log('CARD');
            event.stopPropagation();
    }
});