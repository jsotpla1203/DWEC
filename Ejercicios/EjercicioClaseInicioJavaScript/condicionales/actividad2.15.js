"use strict";

let num1 = Number(prompt("Escribe un número"));

if (num1 % 1 === 0){
    console.log("El número es entero");
    if(num1 % 2 === 0){
        console.log("El número es par");
    }
    else{
        console.log("El número es impar")
    }
}
if(num1 % 1 != 0){
    console.log("El número es real o no entero");
    console.log("No procede");
}
if(num1 < 0){
    console.log("El número es negativo");
}
if(num1 > 0 ){
    console.log("El número es positivo");
}
else if(num1 === 0){
    console.log("El número es cero");
    console.log("Es par");
}