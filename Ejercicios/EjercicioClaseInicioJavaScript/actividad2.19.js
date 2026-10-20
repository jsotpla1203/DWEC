"use strict";

//1
let a = 10;
let b = 5;

a += b;
b += 3;
a /= 2;

console.log(a);
console.log(b);

//2
a = "10";
b = "5";

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);

//3
let resultado; 
a > b ? resultado = "A es mayor" : resultado = "B es mayor o igual"; //Se compara el primer caracter de la cadena usando el código ASCI
console.log(resultado);

//4
console.log(typeof(a));

//5
console.log(2 << 1);//Multiplicación por 2
console.log(2 >> 1);//División entre 2