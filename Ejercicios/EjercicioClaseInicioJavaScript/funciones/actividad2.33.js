"use strict";


let palabraSecreta = "";
let intentos = 6;
let estadoPalabra = [];

const elegirPalabra = () => {
    palabraSecreta = prompt("Escribe la palabra");

    palabraSecreta.toLowerCase();
    
    estadoPalabra = [];
    let letras = palabraSecreta.split("");

    for (let i = 0; i < letras.length; i++) {
        estadoPalabra.push("_");
    }
}

const adivinarLetra = () => {
    let letra = prompt("Escribe una letra");
    
    letra = letra.toLowerCase();

    if (palabraSecreta.includes(letra)) {
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] == letra) {
                estadoPalabra[i] = letra;
            }
        }
    } else {
        intentos--;
        alert("La letra " + letra + " no esta, oportunidades restantes " + intentos);
    }
};

let juego = true;

const juegoTerminado = () => {

    if(!estadoPalabra.includes("_")){ //No quedan guiones
        alert("Has ganado, la palabra secreta es: " + palabraSecreta);
        juego = false;
    }
    if(intentos == 0){
        alert("Has perdido, te has quedado sin intentos");
        juego = false;
    }
};

const mostrarEstado = () =>{
    console.log(estadoPalabra)
    console.log("Intentos restantes " + intentos)
}

const jugar = () => {
    elegirPalabra();   

    
    while (!juegoTerminado()) {

        if(juego == false){
            break;
        };

        mostrarEstado();
        adivinarLetra();
    }

    mostrarEstado();
}

jugar();