
// Exercici 7: Eliminar elementos del DOM,removeChild
// --------------------------------------------------
// 2 formes eliminar:
// - Eliminar un elemento por si mismo
// - Eliminarlo des del pare...

// a) Eliminem el primer Link que troba ... en aquest cas la opció de menú Vender
const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
//primerEnlace.remove();

// b) Accedir a la class="navegacion" y eliminem la opció de menú Registro
// A partir del pare

// Ho podem fer amb el nom de la classe
const navegacion1 = document.getElementsByClassName('navegacion') 
console.log(navegacion1[0].children)
//navegacion1[0].removeChild(navegacion1[0].children[2]);

// O accedint al element en questió
const navegacion2 = document.querySelector('.navegacion');
console.log(navegacion2.children);
//navegacion2.removeChild(navegacion2.children[2]);



