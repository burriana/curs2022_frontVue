//Total de la compra
var total = 0;



// Exercici 0: Mostrar cartList 
function ShowCartList() {
    // console.table(products);    
    console.table(cartList);
}

function showPrices() {
    console.table(subtotal);
}

function showCart() {
    console.table(cart);
}


// Exercise 1: Add found product to the cartList array
function buy(id) {
    // 1 ) Opcio 1: Suposant que id correspont amb la posició del array
    /*  cartList.push(products[id - 1]);
     console.log("element afegit"); */

    function buscaID(element) {
        if (element.id == id) {
            return element;
        }
    }

    // 2) Opcio 2: Seria més optim buscar el id del objecte producte amb l'id ( parametre que li hem passat a la funció )
    productBuy = products.find(buscaID)
    cartList.push(productBuy)
    console.table(cart);

    // 3) Opcio 3: Simplifiquem amb arrow funcions =>
    //cartList.push(products.find((element) => element.id == id))
}


// Exercise 2: eliminem tots els productes de la CartList
function cleanCart() {

    // Eliminem element per element'
    /* while (cartList.length > 0) {
         cartList.pop();
    }*/

    // O podem fer també amb mètodes
    console.log(cartList.length);

    cartList.splice(0, cartList.length)

    // Mes eficient.
    carList.length = 0;

    cartList = [];

}

// Exercise 3: Segons els elements inclosos en la CartList, afegir els subtotals al array 
function calculateSubtotals() {

    //Create a for loop on the "cartList" array 
    // 1. calculem els subtotals depenent del tipus de compra
    /*    for (var i = 0; i < cartList.length; i++) {
           // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
           switch (cartList[i].type) {
               case "grocery":
                   subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
                   break;
               case "beauty":
                   subtotal.beauty.value += cartList[i].price;
                   break;
               case "clothes":
                   subtotal.clothes.value += cartList[i].price;
                   break;
               default:
                   console.log("Hi ha hagut un error");
           }
       } */


// PER AGAFAR DINAMiCAMENT ELS TIPUS DE PROdUCTES     
// calculem els subtotals depenent del tipus de compra
// a la variable tipus tenim les categories: groocery, clother, beauty
tipus = Object.keys(subtotal);
// OJO => tenim un for dins d'un for
// El primer recorre tota la cartList
for (var i = 0; i < cartList.length; i++) {
    // El segon recorre tots els tipus
    tipus.forEach(element => {
        //Si el tipus del producte de la cistella, és la mateixa que la del tipus, aleshores sumem
        // OJO toFixed retorna string .. per aixo abans de tornar a sumar em de passar a float.
        if (cartList[i].type == element) {
            total2 = subtotal[element].value + cartList[i].price;
            subtotal[element].value = parseFloat(total2.toFixed(2));
        }
    });
}
}

