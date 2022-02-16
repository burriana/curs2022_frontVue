/* 1. Fes un programa on es forci el resultat NaN i es mostri per pantalla. */
var notNumber = NaN;
if (isNaN(notNumber)) {
    window.alert(notNumber + " no és un nombre")
} else {
    window.alert(notNumber + " és un nombre")
}

document.getElementById("demo").innerHTML = notNumber + " no és un nombre"