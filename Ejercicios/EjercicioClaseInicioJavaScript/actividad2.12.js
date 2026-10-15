"use strict";

//const PRIMERO = prompt("Primer numero", "4");
//const SEGUNDO = prompt("Segundo numero", "7");
//console.log(PRIMERO + SEGUNDO); // Va a concatenar los números, porque está pasando los números como cadenas de texto y usando el operador +

//1.
//console.log(parseInt(PRIMERO, 10) + parseInt(SEGUNDO, 10)); // Operandos 4 y 7 el resultado va a ser 11

//2.
const PRIMERO = prompt("Primer numero, usa punto como separador decimal", "4");
const SEGUNDO = prompt("Segundo numero, usa punto como separador decimal", "7");
console.log("Primero " + parseFloat(PRIMERO));
console.log("Segundo " + parseFloat(SEGUNDO));

console.log(parseFloat(PRIMERO) + parseFloat(SEGUNDO)); /*parseInt() no conserva la parte decimal porque parsea a entero he usado 
                                                          parse float porque da menos errores que number*/