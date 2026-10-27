"use strict";

//1.
function solicitarConfirmacion(pregunta, alAceptar, alCancelar){
    if (confirm(pregunta)) {
        alAceptar();
    } else {
        alCancelar();
    }
}

//2.
let confirmarReserva = function () {
    console.log("Reserva confirmada");
};

let cancelarReserva = function () {
    console.log("Reserva cancelada");
};

let preguntaTexto = "¿Quieres confirmar tu plaza en el taller de JavaScript?";

//3.
console.log("Prueba 1");
solicitarConfirmacion(preguntaTexto, confirmarReserva, cancelarReserva);

console.log("Prueba 2");
solicitarConfirmacion(preguntaTexto, function () {
    console.log("Reserva confirmada");
},
function () {
    console.log("Reserva cancelada");
}
);

/* 
Pasar 'confirmarReserva' transfiere la referencia (la función en sí misma) 
como un argumento a 'solicitarConfirmacion'.
Si pasamos 'confirmarReserva()', estaríamos ejecutando la función 
inmediatamente en el momento exacto de la llamada, pasando como argumento el 
valor devuelto por la función en lugar de la función misma.
*/