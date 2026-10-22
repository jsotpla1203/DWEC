"use strict";

const codigos = [101, 108, 115, 123, 137, 142, 156, 164, 178, 190];

let codigob = prompt("Escribe para buscar un codigo");
codigob = Number(codigob);

let primero = 0;
let ultimo = codigos.length - 1;

let posicion = -1; //Guardar el índice


while(primero <= ultimo){
    
    let medio = Math.floor((primero + ultimo) / 2);

    if(codigos[medio] === codigob){
        posicion = medio;
        break;
    }
    else if (codigob < codigos[medio]) {
        ultimo = medio - 1;
    } else {
        primero = medio + 1;
    }
}

if (posicion !== -1) {
    alert("Código encontrado en el índice: " + posicion);
} else {
    alert("Código no encontrado.");
};