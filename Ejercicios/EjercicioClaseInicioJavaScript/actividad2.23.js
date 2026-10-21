"use strict";

const codigos = [101, 108, 115, 123, 137, 142, 156, 164, 178, 190];

let codigo = prompt("Escribe para buscar un codigo");
codigo = Number;

let primero = codigo[0];
let ultimo = codigo.length - 1;


while(primero <= ultimo){
    
    let medio = Math.floor((primero + ultimo) / 2);
    if(codigos[medio] === codigo){
        console.log("Encontrado en el medio")
    }


}



