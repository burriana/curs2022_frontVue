// Exercici 1:  objectes productes
const product1 = {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery'
}

const product2 = {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery'
}

const product3 = {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery'
}

const product4 = {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty'
}

const product5 = {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty'
}

const product6 = {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty'
}

const product7 = {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes'
}

const product8 = {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes'
}

const product9 = {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes'
}

//Exercici2: Array amb Productes
const subtotal = {
    grocery: {
        id: '01',
        value: 0,
        quantity: 8,
        discount: 0
    },
    beauty: {
        id: '02',
        value: 0,
        quantity: 0,
        discount: 0
    },
    clothes: {
        id: '03',
        value: 0,
        quantity: 0,
        discount: 0
    },
};

//Exercici 3: Array de la llista de la compra, carList
const cartList = [{
    id: 1,
    name: "cooking oil",
    price: 10.5,
    quantity: 7,
    subtotal: 73.5,
    subtotalWithDiscount: 70,
    type: '01'
},{
    id: 2,
    name: "Pasta",
    price: 6.25,
    quantity: 2,
    subtotal: 12.5,
    subtotalWithDiscount: 12,
    type: '01'
}, {
    id: 3,
    name: "Make-up",
    price: 20.5,
    quantity: 1,
    subtotal: 0,
    subtotalWithDiscount: 0,
    type: '02'
}
]