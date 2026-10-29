"use strict";


function ejecutarSegun(decision, si, no) {
    if (decision) {
        return si();
    } else {
        return no();
    }
}

//1.
const siExpresion = function() { return "Continuar"; };
const noExpresion = function() { return "Cancelar"; };

console.log("true:", ejecutarSegun(true, siExpresion, noExpresion));
console.log("false:", ejecutarSegun(false, siExpresion, noExpresion));

//2.
const siFlechaLlaves = () => { return "Continuar"; };
const noFlechaLlaves = () => { return "Cancelar"; };

console.log("true:", ejecutarSegun(true, siFlechaLlaves, noFlechaLlaves));
console.log("false:", ejecutarSegun(false, siFlechaLlaves, noFlechaLlaves));


//3.
const siFlechaDirecta = () => "Continuar";
const noFlechaDirecta = () => "Cancelar";

console.log("true:", ejecutarSegun(true, siFlechaDirecta, noFlechaDirecta));
console.log("false:", ejecutarSegun(false, siFlechaDirecta, noFlechaDirecta));