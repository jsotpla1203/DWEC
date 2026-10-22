"use strict";

let continuar = true;
while(continuar){


let num1 = (prompt("Escribe un número o cancela para salir"));

if (num1 === null) {
    alert("Operación cancelada por el usuario.");
    break;
}

let num2 = (prompt("Escribe otro número "));

if (num2 === null) {
    alert("Operación cancelada por el usuario.");
    break;
}

num1 = Number(num1);
num2 = Number(num2);

let operacion = String(prompt("Escribe la operación que quieras realizar: "));


if(isNaN(num1) || isNaN(num2) || !isFinite(num1) || !isFinite(num2)){
    alert("Error en la entrada de los datos");
    continue;
}

switch(operacion){

    case "suma":
        alert(num1 + " + " + num2 + " = " + (num1 + num2) );
        break;
    
    case "resta":
        alert(num1 + " - " + num2 + " = " + (num1 - num2));
        break;

    case "multiplicacion":
        alert(num1 + " * " + num2 + " = " + (num1 * num2));
        break;

    case "division":
        if (num2 === 0){
            alert("Error no se puede dividir entre cero");
            break;
        }
        alert(num1 + " / " + num2 + " = " + (num1 / num2));
        break;

    case "potencia":
        if (isFinite(num1 ** num2)){
            alert(num1 + " potencia " + num2 + " = " + (num1 ** num2));
            break;
        }
        else{
            alert("Error, es infinito");
            break;
        }

    case "modulo":
        if(num2 === 0){
            alert("Error no se puede hacer el módulo de cero");
            break;
        }
        alert(num1 + " % " + num2 + " = " + (num1 % num2));
        break;

    default:
        alert("Error en la operacion");
}

let respuesta = confirm("¿Deseas realizar otra operación?");
if (!respuesta) {
    continuar = false;
    lert("¡Hasta luego!");
};

};