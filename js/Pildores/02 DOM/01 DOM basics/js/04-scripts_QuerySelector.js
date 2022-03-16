// Exercici 4: QuerySelector
// ------------------------------------
/* Mostra per consola:
•	la primera .card  
•	l’element de la classe info del contenidor premium
•	la segona card de hospedaje
•	el formulari per id
•	el primer menú de navegació  <nav> */

// Retornar max 1 elemento, si hay múltiples coincidencias solo va a retornar el primero.
// OJO la sintaxis para selectores es la misma que con CSS, con el punto para las classes y # para los ID's

console.log("------ CARD ------------");
const card = document.querySelector('.card'); 
// nota como a pesar de tener múltiples cards, solo selecciona 1
console.log(card);

console.log("------ CARD: PREMIUM/INFO ------------");
// al ser una sintaaxis tipo CSS puedes utilizar selectores más especificos...
var info = document.querySelector('.premium .info');
info = document.querySelector('.premium > .info');
console.log(info);

console.log("------ CARD: 2on card: hospedaje ------------");
// Seleccionar el segundo card... de hospedaje
var segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
segundoCard = document.querySelectorAll('.hospedaje .card')[1];
console.log(segundoCard);

console.log("------ form ------------");
// Ahora estas son classes, veamos como seleccionar un ID
const formulario = document.querySelector('form#formulario'); // En CSS seleccionas los ID con un signo de numeral..
console.log(formulario);

console.log("------ NAV ------------");
// Recuerda que también en CSS puedes seleccionar etiquetas asi que si quieres seleccionar la navegación podrías tener algo asi:
const nav = document.querySelector('nav');
console.log(nav);