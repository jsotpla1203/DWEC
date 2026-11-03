"use strict";

//Identificamos los elementos del HTML
const dadoJ1 = document.querySelector("#dado-j1");
const dadoJ2 = document.querySelector("#dado-j2");
const dadoJ3 = document.querySelector("#dado-j3");

const dadoO1 = document.querySelector("#dado-o1");
const dadoO2 = document.querySelector("#dado-o2");
const dadoO3 = document.querySelector("#dado-o3");

const resultadoJugador = document.querySelector("#resultadoJugador");
const puntosTotalesJugador = document.querySelector("#puntosTotalesJugador");
const resultadoOrdenador = document.querySelector("#resultadoOrdenador");
const puntosTotalesOrdenador = document.querySelector("#puntosTotalesOrdenador");


const resultadoFinal = document.querySelector("#resultado");
const lanzarDados = document.querySelector("#lanzar");
const reiniciarDados = document.querySelector("#reiniciar");


//Funcion que devuelve el resultado de lanzar un dado aleatorio
const lanzarDado = () => {
    const dado = Math.floor(Math.random() * 6 + 1);
    return dado;
}


function clasificarDados(d1, d2, d3) {
    let valorDado = 0; //Guardamos el valor del dado que se repite

    //Si hay Trío, el dado que se repite es d1
    if (d1 === d2 && d2 === d3) {
        valorDado = d1;
        return ["Trío de " + valorDado, 30 + valorDado] //Array con el texto y con los puntos 
                                                        //(He visto en internet que en JavaScript se pueden mezclar tipos de datos)
    }

    //Si el primer dado se repite con el segundo o el tercero
    if (d1 === d2 || d1 === d3) {
        valorDado = d1;
        return ["Pareja de " + valorDado, 20 + valorDado]
    }

    //Si el segundo dado se repite con el tercero
    if (d2 === d3) {
        valorDado = d2;
        return ["Pareja de " + valorDado, 20 + valorDado]
    }

    //Si ningún dado es igual
    return ["No hay combinacion mala suerte", d1 + d2 + d3];
}


lanzarDados.addEventListener("click", () => {
    //Generar dados del jugador
    const j1 = lanzarDado();
    const j2 = lanzarDado();
    const j3 = lanzarDado();

    //Generar dados del ordenador
    const o1 = lanzarDado();
    const o2 = lanzarDado();
    const o3 = lanzarDado();

    //Calcular los puntos según los dados y guardarlos en un array que devolviamos en la funcion
    const [textoJugador, puntosJugador] = clasificarDados(j1, j2, j3);
    const [textoOrdenador, puntosOrdenador] = clasificarDados(o1, o2, o3);


    //Mostrar los valores de las tiradas aleatorias usando textContent
    dadoJ1.textContent = j1;
    dadoJ2.textContent = j2;
    dadoJ3.textContent = j3;

    dadoO1.textContent = o1;
    dadoO2.textContent = o2;
    dadoO3.textContent = o3;

    //Mostrar los textos y los puntos de cada uno
    resultadoJugador.textContent = [textoJugador];
    puntosTotalesJugador.textContent = "Puntos totales: " + [puntosJugador];

    resultadoOrdenador.textContent = [textoOrdenador];
    puntosTotalesOrdenador.textContent = "Puntos totales: " + [puntosOrdenador];

    //Calcular el ganador
    if (puntosJugador > puntosOrdenador) {
        resultadoFinal.textContent = "Ganas tú";
    } else if (puntosOrdenador > puntosJugador) {
        resultadoFinal.textContent = "Gana el ordenador (la banca siempre gana)";
    } else {
        resultadoFinal.textContent = "Empate (Mira que es difícil que salga)";
    }

    

})