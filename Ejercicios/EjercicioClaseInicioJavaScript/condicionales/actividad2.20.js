"use strict";

let num1 = Number(prompt("Escribe un número entero"));
let esPrimo = true;

if(num1 == 1){
    esPrimo = false;
}
else{

    for(let i = 2; i < num1; i++){

    if(num1 % i == 0){
        esPrimo = false;
        break;
    }
}

}
if(esPrimo == true){
    console.log("es primo");
}
else{
    console.log("no es primo");
};