"use strict";

function saludar(nombre, saludar = " Hola "){
    console.log(saludar + nombre);
}

saludar("Pepe", "Hola que tal, "); //Con los dos argumentos
saludar("Pepe"); //Solo nombre
saludar("Pepe", undefined) //Undefined
saludar("Pepe", "") //"" como segundo argumento

//Se aplica el valor predeterminado cuando no se pasa el argumento