/* 3. Fes un programa per validar que no es un número */
var numero = "2";
var esNumero = ! isNaN(numero); 
var NoesNumero = isNaN(numero); 

if (esNumero) {
    window.alert(numero + " no és un nombre")
    document.getElementById("demo").innerHTML = numero + " no és un nombre"
} else {
    window.alert(numero + " és un nombre")
    document.getElementById("demo").innerHTML = numero + " és un nombre"
}