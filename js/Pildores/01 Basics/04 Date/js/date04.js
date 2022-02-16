/* 4. Crea un programa que mostri per pantalla la data en format català. 
Per exemple: 11 de setembre de 1714. */

var fecha = new Date("2025/02/12");
var dia = fecha.getDate();
var mes = fecha.getMonth();
var any = fecha.getFullYear();
var nomMes = "";

console.log(fecha);
console.log(mes);
console.log(any);

if (mes == 0) {
    nomMes = "Gener";
}
if (mes == 1) {
    nomMes = "Febrer";
}
if (mes == 2) {
    nomMes = "Març";
}
if (mes == 3) {
    nomMes = "Abril";
}
if (mes == '4') {
    nomMes = "Maig";
}
if (mes == '5') {
    nomMes = "Juny";
}
if (mes == '6') {
    nomMes = "Juliol";
}
if (mes == '7') {
    nomMes = "Agost";
}
if (mes == '8') {
    nomMes = "septembre";
}
if (mes == '9') {
    nomMes = "Octubre";
}
if (mes == '10') {
    nomMes = "Novembre";
}
if (mes == '11') {
    nomMes = "Diciembre";
}


switch (mes) {
    case 0:
        nomMes = "Generrrrrr";
        break;
    case 1:
        nomMes = "Febrerrrrr";
        break;
    case 2:
        nomMes = "Març";
        break;
    case 3:
        nomMes = "Abril";
        break;
    case 4:
        nomMes = "Maig";
        break;
    case 5:
        nomMes = "Juny";
        break;
    default:
        break;
}


console.log(dia + " de " + nomMes + " de " + any)