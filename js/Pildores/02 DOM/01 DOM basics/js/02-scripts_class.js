// Exercici 2:  Accedim a les classes
// ---------------------------------
/* Mostra per consola 
•	el header ( class = header )
•	el contenido-hero ( class = contenido-hero )
•	els contenidors ( class = contenedor) */

// OJO mayusculas y minusculas...
// Todos tus selectores inician con document...

console.log("------ header ------------");
const header = document.getElementsByClassName('header'); 
console.log(header);

console.log("------ contenido-hero  ------------");
const hero = document.getElementsByClassName('contenido-hero');
console.log(hero);

// Como las classes se pueden repetir, obviamente todas las coincidencias de classes se asignaran a contenedores.
console.log("------ contenedor  ------------");
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

console.log("------ No encuentra Classe  ------------");
// Si una clase no existe, no va a retornar nada...
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

