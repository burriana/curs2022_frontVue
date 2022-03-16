// Exercici 5: QuerySelectorAll
// ------------------------------------
/* Mostra per consola:
•	Totes les .card  
•	Els element amb id=formulario. */ 


// OJO: la sintaxis para selectores es la misma que con CSS, con el punto para las classes y # para los ID's
// querySelectorAll va a retornar TODOS los elementos que concuerden con el selector y no va a limitarte al primero como querySelector.


console.log("------ CARD ------------");
// En nuestro HTML hay muchos cards, cuando utilizamos querySelector vimos que retornaba unicamente el primero..
const cards = document.querySelectorAll('.card'); 
console.log(cards);

console.log("------ FORM ------------");
// si recuerdas tenemos dos elementos con el id de formulario
const formularios = document.querySelectorAll('#formulario');
// Puedes ver quue eso si funciona, sin embargo recuerda que no rescomendable tener el mismo ID más de una vez por docuemnto... 
console.log(formularios); 

