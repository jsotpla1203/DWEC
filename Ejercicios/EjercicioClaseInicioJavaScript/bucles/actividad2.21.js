"use strict";

let correcto = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

for(let i = 1; i <= 10; i++){
    let num1 = Number(prompt("Intenta adivinar el número intento número: " + i));

    if(num1 == correcto){
        console.log("Felicidades lo has adivinado el numero es " + correcto);
        break;
    }
    else if(num1 < correcto){
        console.log("No es correcto el número a adivinar es mayor");
    }
    else if(num1 > correcto){
        console.log("No es correcto el número a adivinar es menor")
    }
    
    if(i == 10){
        console.log("Te has quedado sin intentos el numero es " + correcto);
    }

}