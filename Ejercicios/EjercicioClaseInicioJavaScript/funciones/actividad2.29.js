"use strict";

function precioFinal(precio, porcentaje){
    let precioFinal = precio - (precio * (porcentaje / 100));
    return precioFinal;
}

const PRECIO = 80;

// 1. Descuento del 0%
console.log(precioFinal(PRECIO, 0));

// 2. Descuento del 25%
console.log(precioFinal(PRECIO, 25));

// 3. Descuento del 100%
console.log(precioFinal(PRECIO, 100));