"use strict";

//1.
function suma(...numeros){

    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    //2.
    return total;
}

//3.
console.log(suma());          // 0
console.log(suma(7));         // 7
console.log(suma(2, 3, 4));   // 9
console.log(suma(-2, 5));     // 3
console.log(suma(1.5, 2.25)); // 3.75

/*
Cuando se llama a la función sin argumentos crea un array vacío: numeros = [].
Al ejecutar el bucle 'for', la condición 'i < numeros.length' (0 < 0) resulta false
desde el primer momento, por lo que las iteraciones del bucle no llegan a ejecutarse 
ninguna vez.
*/