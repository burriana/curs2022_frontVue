// Exercici 2: mouseenter, mouseout
// ---------------------------------

// a): Al entrar al menu de navegació, camiarem el seu estil a backgroundColor= white
// Ho fem canviant la classe style.backgroundColor
const nav = document.querySelector('.navegacion');

/* nav.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')
    nav.style.backgroundColor = 'white';
}); */

nav.addEventListener('mouseenter', cambioFondo);

function cambioFondo(){
    console.log('entrando a navegacion')
    nav.style.backgroundColor = 'white';
}

// b): Al sortir del menu de navegació, tornarem a deixar l'estil inicial (backgroundColor= transparent )
// Ho fem canviant la classe style.backgroundColor
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
})

