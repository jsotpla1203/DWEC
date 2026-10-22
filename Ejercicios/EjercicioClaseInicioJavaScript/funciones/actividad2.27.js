"use strict";

//1.
function menor(numero1, numero2){
    if(numero1 < numero2){
        return(numero1);
    }
    else{
        return(numero2);
    };
};

console.log(menor(32, 82));
console.log(menor(2, 19));
console.log(menor(5, 5));

//2.
function potencia(base, exponente){
    if(exponente < 1){
        return("Solo se admiten exponentes mayores a 1");
    }

    let resultado = 1;

    for(let i = 0; i < exponente; i++){
        resultado *= base
    };
    return resultado;
};

console.log(potencia(2, 4));

//3.
console.log(potencia(-2, 3)); //Esperado -8 Resultado real -8
console.log(potencia(-2, 4)); //Esperado 16 Resultado real 16