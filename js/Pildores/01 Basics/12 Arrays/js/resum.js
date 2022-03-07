//*********************
// ******** DEFINICION 
// Los arrays forman una parte muy importante en cualquier lenguaje de programación
// Un array es una forma de agrupar grandes cantidades de información en una sola variable.
// Un ejemplo de un array es un carrito de compras, sirve para agrupar elementos del mismo tipo.
// También la forma en que facebook muestra un listado de amigos o personas que le dieron Me Gusta a tu última foto, seguramente es un array.

// Veamos primero como crear un array...
// En JavaScript cuando veas corchetes son buen indicativo de que esto es un array, a diferencia de los objetos is recuerdas su sintaxis es la de unas llaves { }
//Array numeros
const numeros = [10,20,30,40,50];
console.log(numeros);

// El array anterior fue de números, también puedes crear uno de Strings por ejemplo y se puede crear utilizando la palabra new
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
console.log(meses);

// Ahora no es obligatorio que el array tenga numeros o strings unicamente, también puede tener un poco de todo:
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];
console.log(deTodo);



//*********************
// ******** ACCESO A UN ELEMENTOS
// Veamos como acceder a los elementos de un array...
const numeros = [10,20,30,40,50];

// esta vez estare utilizando 
console.table(numeros);


// La forma en la que accedes a un array es por lo que se conoce como el indice en el array, los arrays normlamente en todos los lenguajes se inician en 0.
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[3])
console.log(numeros[20])


//*********************
// ******** ACCESO A MULTIPLES ELEMENTOS, CON BUCLES
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Si quieres saber cuantos elementos hay un array puedes utilizar la propiedad
console.log(meses.length);

// Que passa si queremos acceder a todos los elementos de un array, por ejemplo, si tienes un carrito de compras y agregas o quitas elementos del carrito, ese array crece de forma dinamica, entonces, como acceder a todos los elementos? con algo llamado un iterador, y en javascript hay varios, veamos el for que existe en diferentes lenguajes...

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}


//*********************
// ******** MODIFICACIONS
// Un array se puede modificar a pesar de utilizar la palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
meses[0] = 'Nuevo Mes'


// También se puede añadir al final
meses[6] = 'Ultimo Mes'
console.log(meses);

// los arrays tienen métodos que son bastante útiles, así que veamos algunos ejemplos: 


//*********************
// ******** AÑADIR ELEMENTOS AL ARRAY: fORMA IMPERATIVA
// Supongamos que creamos un carrito de compra
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

// Añadir OTRO elemento al carrito...
const producto2 = {
    nombre: 'Celular', 
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);


// Añadir al Inicio del carrito...
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

console.log(carrito);


//*********************
// ******** AÑADIR ELEMENTOS AL ARRAY, USANDO el Spread Operator o Rest Operator..."FORMA DECLARATIVA"
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Celular', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Para añadir producto al array simplemente agregamos...
let resultado = [...carrito, producto];
 resultado = [...resultado, producto2];

 // Para añadir al inicio...
 resultado = [producto3, ...resultado];

console.log(resultado);


//*********************
// ******** ELIMINAR ELEMENTOS AL ARRAY, 

// Eliminar el primer elemento...
carrito.shift();

// // Eliminar el ultimo elemento...
carrito.pop();

// Ahora supongamos que deseas eliminar del centro...
carrito.splice(1,0); 
// el segundo parametro es EL NUMERO DE elementos QUE vamos a borrar, 
//     0 significa ninguno, entonces seria igual a no borrar ninguno
//     si no le pasas un valor va a borrar todos a partir de ahi.

// en el siguiente caso borra dos elementos a partir del segundo
carrito.splice(1, 2);

console.log(carrito);


//*********************
// ******** Array Destructuring - Creamos la variable y le asignamos valores

const numeros = [10,20,30,40,50];
const [primero, , segundo, tercero ] = numeros;

// console.log(numeros);
console.log(primero);
console.log(segundo);
console.log(tercero);

// Si quieres saltarte un valor, pon una coma....


//*********************
// ******** Metodos con arrays: foreach

// De aquí en adelante estaremos viendo una serie de métodos de arreglos
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
for(let i = 0; i < carrito.length; i++ ){
    console.log("articulo:" + carrito[i].nombre + "Precio: $ "  + carrito[i].precio);    
}

// ForEach
carrito.forEach( function(producto) {
    console.log("articulo:" + producto.nombre + "Precio: $ "  + producto.precio);   

})


//*********************
// ******** Metodos con arrays: map
// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...


const nuevoArray = carrito.map( function(producto) {
   return  "articulo:" + producto.nombre + "Precio: $ "  + producto.precio;
})

const nuevoArray2 = carrito.forEach( function(producto) {
    return  "articulo:" + producto.nombre + "Precio: $ "  + producto.precio;
 })

console.log(nuevoArray);
console.log(nuevoArray2);