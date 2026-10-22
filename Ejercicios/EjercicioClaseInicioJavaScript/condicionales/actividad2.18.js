"use strict";

let temp = Number(prompt("Escribe una temperatura en cualquier unidad"));
let sentido = prompt("Escribe el sentido Opciones: 'C -> F' o 'F -> C'");

switch(sentido){
    case "C -> F":
        console.log(((temp * 9) / 5) + 32 + " Grados Fahrenheit");
        break;

    case "F -> C":
        console.log((temp - 32) * 5 / 9) + " Grados Cesius";
        break;

    default:
        console.log("Opción desconocida debes escribir exactamente 'C -> F' o 'F -> C'");
};
