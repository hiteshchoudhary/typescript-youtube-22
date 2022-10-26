"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({})
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
