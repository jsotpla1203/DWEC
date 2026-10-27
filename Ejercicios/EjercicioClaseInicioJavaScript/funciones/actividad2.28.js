"use strict";

function contarCaracter(texto, caracter){
    let contador = 0;
    if(texto === null || texto === ""){
        return("La cadena esta vacia");
    }
    texto = String(texto);


    for(let i = 0; i < texto.length; i++){
        if(texto[i] === caracter){
            contador ++;
        }
    }
    return contador;
    
};
// 1. Cadena vacía
let pruebaVacia = contarCaracter("", "a");
console.log("Cadena vacía:", pruebaVacia);

// 2. Ninguna coincidencia
let pruebaSinCoincidencia = contarCaracter("Hola Mundo", "z");
console.log("Ninguna coincidencia:", pruebaSinCoincidencia);

// 3. Varias coincidencias (distinguiendo mayúsculas/minúsculas)
let pruebaVarias = contarCaracter("JavaScript", "a");
console.log("Varias coincidencias ('a'):", pruebaVarias);

let pruebaMayuscula = contarCaracter("JavaScript", "A");
console.log("Distingue mayúsculas ('A'):", pruebaMayuscula);