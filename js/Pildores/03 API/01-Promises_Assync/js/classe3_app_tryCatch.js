async function calcula(x,y) {
    let sum = 0;
    //console.log("Comencem a calcular");
    setTimeout(function () {
        sum = x + y;
        if (isNaN(sum)) {
            console.log('Error while calculating sum.');
        } else {
            console.log(sum);
        }
    }, 2000);
};

async function inici() {
    try {
        await calcula(3,4);
        await calcula(6,7);
       
    } catch (error) {
        console.log(error)
    }
   
}

inici();
console.log("ACABAT EL PROGRAMA PRINCIPAL");
console.log('Calculando ...');
// console.log(2 + 2);