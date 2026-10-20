"use strict";

let num1 = Number(prompt("Escribe un número"));

if(num1 < 0 || num1 > 100){
    console.log("Revisar");
}
else if (num1 <= 49) {
    console.log("Inicial");
} 
else if (num1 <= 79){
    console.log("Intermedio");
}
else{
    console.log("Avanzado");
};