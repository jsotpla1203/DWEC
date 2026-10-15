"use strict";

console.log("a" + 2 + 3); //Resultado esperado: a23 
console.log("5" - 2 + 3); //Resultado esperado: 6
console.log(false + true + false); //Resultado esperado: false (Da 1 porque el "+" va a sumar el valor numérico de los booleanos)
console.log(9 / "3"); //Resultado esperado: 3
console.log("3" * "4"); //Resultado esperado: 12
console.log(7 + 8 + "px"); //Resultado esperado: 15px
console.log("€" + 3 + 2); //Resultado esperado: €32
console.log("5" - 1); //Resultado esperado: 4
console.log("5em" - 1); //Resultado esperado: NaN
console.log(" -7 " + 3); //Resultado esperado: -7 3
console.log(" -7 " - 3); //Resultado esperado: -10
console.log(null + 2); //Resultado esperado: null (Da 2 porque null se convierte en 0 al operar con el)
console.log(undefined + 2); //Resultado esperado: null (Da NaN porque a la hora de sumar undefined == NaN)
console.log(" \t \n" - 1); //Resultado esperado: -1
console.log(1 / 0); //Resultado esperado: Infinito