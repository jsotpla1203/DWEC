"use strict";

//1.
let plazas = 12;
let estado = "Sin confirmar";

function reservar(plazas) {
    let estado = "Reserva simulada";
    plazas -= 2;
    console.log("Dentro:", plazas, estado);  //Predicción: "Dentro, 10, Reserva simulada"  Resultado real: Dentro: 10 Reserva simulada
    return plazas;
}

const disponibles = reservar(plazas);
console.log("Resultado:", disponibles); //Predicción: "Resultado: 10, Reserva simulada" Resultado real: Resultado 10
console.log("Fuera:", plazas, estado); //Predicción: "Fuera: 10, Sin confirmar" Resultado real: Fuera: 12 Sin confirmar

/*
Cambiar 'plazas' no afecta a la variable exterior porque los números en JavaScript
se pasan por valor (se crea una especie de copia dentro de la función).
Cambiar 'estado' tampoco afecta a la variable exterior porque al usar 'let' dentro
de la función se crea una nueva variable.
*/
reservar(plazas);
console.log("Fuera tras segunda llamada:", plazas); 
//La resta no se acumula. 'plazas' sigue valiendo 12 porque la variable exterior no se ha modificado.


//2.
function reservarRenombrado(plazasRecibidas) {
    let estado = "Reserva simulada";
    plazasRecibidas -= 2;
    console.log("Dentro (renombrado):", plazasRecibidas, estado);
    return plazasRecibidas;
}

/*
Funciona igual que antes. El nombre del parámetro es una variable independiente, 
no depende de que se llame igual que la variable exterior.
*/


//3.
/*
Si quitamos 'let' dentro de la función (estado = "Reserva simulada";)al no usar 'let', 
no se crea una variable local si no que se reasigna.
Por tanto, al ejecutar console.log("Fuera:", plazas, estado); la variable global 
'estado' habrá cambiado a "Reserva simulada".
*/

//4.
plazas = disponibles;
estado = "Confirmada";

console.log("Plazas:", plazas, " Estado:", estado);

/*
La diferencia es que calcula y entrega un valor sin modificar el entorno global, preserva los datos originales.
Asignar expresamente (plazas = disponibles): actualiza las variables del exterior, 
haciendo persistente la reserva en la aplicación.
*/