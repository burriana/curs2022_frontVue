
// Exercici 4, Evita enviar el formulari, al fer Buscar
// ---------------------------------
/* {
<form action="/buscador" method="POST" class="formulario formulario-buscar" id="formulario" >
    <input type="text" name="busqueda" class="busqueda" placeholder="New York, Londres, Roma, Guadalajara">
    <input type="submit" value="Buscar" id="btn-submit">
</form>  
  Si li donem a Buscar intentará enviar el Formulari al servidor... 
  Però hem d'evitar enviar-ho si no està validat, per això fem servir preventDefault  
}*/



const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();     
    console.log('enviando...');
}) 