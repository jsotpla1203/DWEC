"use strict";

let precios = []; //Lo hago con let para añadir elemtos o quitarlos más adelante
console.log(precios[0]); //Primer elemento
console.log(precios[precios.length - 1]); //Último elemento

precios[1] = 2; //Modifico segundo elemento
console.log(precios);
console.log(precios.length);

precios.push(32); //Añadir elemento
console.log(precios);
console.log(precios.length);

let ultimo = precios.pop(); //Eliminar último elemento
console.log(ultimo); //Mostrar elemento eliminado
console.log(precios);
console.log(precios.length);

//Después de probarlo con const sigue funcionando