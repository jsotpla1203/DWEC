"use strict";

const nombre = document.getElementById("nombre"); //Obtenemos el nombre
const saludo = document.getElementById("saludo"); //Obtenemos el saludo

function saludar(e){ //Funcion saludar con el parametro event que tiene información de la acción realizada
    if(e.key === 'Enter'){
        saludo.textContent = "Hola " + nombre.value;
    }
};

nombre.addEventListener("keydown", saludar); //Cada vez que ocurre el evento se ejecuta saludar