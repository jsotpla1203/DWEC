"use strict";

let a = 10;
let b = 5;

{
    let a = 3;
    console.log(a, b); // a = 3 y b = 5
}
console.log(a, b); // a = 10 y b = 5

// Si sustituyes let a = 3 por a = 3 el último console.log daría 3, 5 ya que se estaría usando la variable de fuera del ámbito

console.log(++a); // 11
console.log(b++); // 5
console.log(a); // 11
console.log(b); // 6

//console.log(++a); primero incrementa a y después se muestra por lo que da 11
//console.log(b++); primero muestra b y despúes lo incrementa por lo que da 5
//console.log(a); da 11
//console.log(b); da 6 porque se incrementó anteriormente después de mostrarlo

//Suma, resta, multiplicación, división, resto
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Incrementa y decrementa
++a;
--b;
console.log(a, b);

//Comprobaciones
console.log(a === b); // 12 === 5
console.log(a !== b); // 12 !== 5
console.log(a > b); // 12 > 5
console.log(a <= b); // 12 <= 5