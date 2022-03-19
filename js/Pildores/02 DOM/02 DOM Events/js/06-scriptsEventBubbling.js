// Exercici 5, Event Bubbling: stopPropagation
// ---------------------------------
// Event Bubling es cuando presionas en un evento, pero ese evento se propaga por muchos otros dando resultados inesperados

// Les següents variables recullen información de la primera card
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// Afegeix un eventListener, per tal de que capturi el click de cada un d’ells. 
// I escrigui en consola un missatge corresponent a cada event
// Que pasa?, com ho podem evitar?

cardDiv.addEventListener('click', e => {
   // e.stopPropagation();
    console.log('click card');
})

// Si no fiquem el stopPropagation ... al fer click també ens faria el click de la card
infoDiv.addEventListener('click', e => {
   // e.stopPropagation();
    console.log('click info');
})

// Si no fiquem el stopPropagation ... al fer click també ens faria el click de la card i el de info
titulo.addEventListener('click', e => {
   // e.stopPropagation();
    console.log('click titulo');
})