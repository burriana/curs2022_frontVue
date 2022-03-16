// Exercici 6: textContent
// -----------------------------------------
// Modificar el texto: Encuentra hospedaje para tus próximas vacaciones


console.log("------ selecionamos text a modificar: Ejemplo: contenido-hero h1------------");
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado); 

console.log("------ATRIBUTOS TEXTO: innerText, textContent, innerHtml ------------");
// Si deseas acceder al texto hay 3 formas de hacerlo...
// Cual es la diferencia entre estas 3...
// Ejemplo: si elemento e CSS visibility: hidden; 
// innerText = no puede acceder a ese contenido...
// Ahora, si añadimos tags HTML, 
// TextContent: va a ignorar etiquetas HTML y traer solo el texto
// innerhTML: si se trae el HTML..
console.log(encabezado.innerText); 
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);


console.log("------MODIFICAR TEXTO: innerText, textContent, innerHtml ------------");
// ahora también puedes tener algo de encadenamiento o chaining...
const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(textoEncabezado);

// Ahora, aquí puedes ver que estoy asignando el Texto a una variable, pero también puedes modificarlo de diferentes formas...
document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading'

// otra opción seria con una variable.
const nuevoTexto = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoTexto;


console.log("------MODIFICAR IMAGEN:  ------------");
// También puedes cambiar una imagen...
// No lo hemos visto, pero veamos por ejemplo como acceder a esa imagen...
const imagen = document.querySelector('.card img');
console.log(imagen.src);
// Cambiar la imagen...
imagen.src = 'img/hacer2.jpg';