"use strict";

const NOMBRE = "Lucia";
const SIMPLES  = 'Hola, ' + NOMBRE;
const DOBLES = "Hola, " + NOMBRE;
const INVERTIDAS = `Hola, `+ NOMBRE;

//Las comillas invertidas son las únicas que permiten interpolar la variable
console.log(SIMPLES); //Salida esperada; Hola, Lucia
console.log(DOBLES); //Salida esperada; Hola, Lucia
console.log(INVERTIDAS); //Salida esperada; Hola, Lucia

console.log(NOMBRE + ' Dice: "Hola"');
console.log("It's JavaScript");

//Las comillas interiores no cierran la cadena porque son de un tipo diferente al de las comillas exteriores

//const NOMBRE = "Maria";
//No puede funcionar porque las constantes no se pueden cambiar