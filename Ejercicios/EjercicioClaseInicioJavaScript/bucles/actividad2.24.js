"use strict";

let num1 = prompt("Escribe un número ");

if(num1 > 18){
    alert("No puede ser mayor a 18");
}
else if (num1 === null || num1 < 0 || !isFinite(num1)) {
    alert("Error el número es negativo o nulo.");
}

else{
    num1 = Number(num1);

    if(!Number.isInteger(num1)){
        alert("Error no puede tener decimales");
    }
    else if(num1 === 0){
        alert("El factorial de 0 es 1");
    }
    else{
        let factorial = num1;

        for(let i = 1; i < num1; i++){

            factorial *= i;
        }
        alert("El factorial de " + num1 + " es " + factorial);
    };
};