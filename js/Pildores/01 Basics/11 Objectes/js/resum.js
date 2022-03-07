
// *********************
// ***** definción OBJETO
// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 30;
const disponible = true;


// Podemos crear un objeto que agrupe toda esta información en una sola variable 
// Las llaves despues del signo = representan un objeto
const producto = { // Esto se le conoce como object literal... 
    // El nombre es una propiedad del objeto
    // Nota como en lugar del signo igual se utilizan : , esta sintaxis es propia de los objetos y representa el valor que tendrá la propiedad o la llave del objeto, muchas veces se les dice llave valor
    nombre: 'Monitor 20 pulgadas'
}

// si deseas agregar más propiedades puedes hacerlo de la siguiente forma
const producto = {
    nombre: "Monitor 20 pulgadas", // OJO La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}


// *********************
// ***** ACCESO a las propiedades de un objeto:
// Supongamos que deseamos acceder al nombre, en los objetos de javascript existe algo llamado la sintaxis de punto

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma aunque no tan común es:
console.log(producto['nombre']);


// *********************
// ***** AÑADIR PROPIEDADES A un objeto:
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
producto.imagen = "image.jpg";


// *********************
// ***** ELIMINAR PROPIEDADES se utiliza delete
delete producto.nombre;
console.log(producto);


// *********************
// ***** ASIGNAR variables hacia un objeto: DESTRUCTURING
const nombre = producto.nombre;

// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...
// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas
const {
    nombre
} = producto;
console.log(nombre)

// si deseas extraer más variables;
const {
    precio
} = producto;
console.log(precio)

// O puedes hacerlo mejor con 
const {
    nombre,
    precio
} = producto;
console.log(producto)


// *********************
// ***** OBJETOS ANIDADOS 
// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m'
    }
}
console.log(producto); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);

// *********************
// *****  DESTRUCTURING de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m'
    }
}

const {
    nombre,
    informacion,
    informacion: {
        peso,
        medida
    }
} = producto;


console.log(nombre)
console.log(informacion)
console.log(peso)
console.log(medida)


// *********************
// *****  REESCRIBIR PROPIEDADES CONSTANTES  de un objeto que esta dentro de otro objeto..
// Si recuerdas una variable con const una vez que es definida no puede reasginarse su valor.
// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

console.log(producto);
producto.disponible = false;
console.log(producto); // Puedes ver que lo pudimos modificar, a pesar de ser const, 

// *********************
// ***** Object.freeze

"use strict";
// si no queremos que se modifique el objeto, podemos forzarlo
// Para prevenir que un objeto sea modificado, utilizaremos el metodo freeze, y funciona de la siguiente forma:
Object.freeze(producto); // Freeze toma como argumento el objeto

// ninguno de las siguientes acciones podrá ejecutarse
producto.disponible = false;
producto.imagen = "imagen.jpg";
delete producto.nombre;

// Si quieres revisar si un objeto esta congelado puedes usar
console.log(Object.isFrozen(producto));
console.log(producto);


// *********************
// ***** Object.isSealed
"use strict";
// Similar a Freeze, existe otro object method llamado Seal
// A diferencia de Freeze no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existentes...

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

Object.seal(producto);

// Se pueden reasignar
producto.nombre = 'Tablet';

// Pero no eliminar
// delete producto.precio;


// Tampoco se pueden añadir nuevas
// producto.imagen = "imagen.jpg";

// Verificar si un objeto esta sellado
console.log(Object.isSealed(producto))

console.log(producto);


// *********************
// ***** Object.assign
// Veamos como unir 2 objetos, esto llega a ser muy común ya que algunas veces en una base de datos obtienes el ID del cliente y también tienes los clientes que pertenecen a ese ID y te gustaría unirlos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}

const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

// Una forma de hacerlo es con el object method llamado assign
const resultado = Object.assign(producto, medidas);

// *********************
// *****Unir con => Spread Operator o Rest Operator
// Otra forma de hacerlo que se considera más moderna es con El Spread Operator o Rest Operator, veamoslo en el siguiente video
console.log(resultado);


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

// Otra forma de hacerlo que se considera más moderna es con algo llamado el Spread Operator o Rest Operator
const resultado = {
    ...producto,
    ...medidas
};

console.log(resultado);


// *********************
// *****this => This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento
// Lo veremos mas adelante
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function () {
        return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo());

// *********************
// ***** Object.keys y object.values y entries => estos son más conocidos como iteradores de objetos, 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


console.log(Object.keys(producto)); // nos devolverá un array con los keys del objeto
console.log(Object.values(producto)); // nos devolverá un array con los valores del objeto
console.log(Object.entries(producto)); // Entries nos va a retornar una matriz de llaves y valores

// Y con eso tenemos un buen conocimiento de Objectos en JavaScript, los estaremos retomando más adelante pero primero hay que conocer otros conceptos como Arrays y Funciones para poderle sacar más provecho.