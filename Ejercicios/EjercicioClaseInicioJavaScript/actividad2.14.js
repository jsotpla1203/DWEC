"use strict";

const PRECIO_USB = 8;

let nombre = prompt("Escribe tu nombre");
let cantidad = prompt("Escribe la cantidad") //Aquí la cantidad es una cadena de texto
                                            
let total = PRECIO_USB * Number(cantidad);  /* Aquí hago la variable total y le asigno la constante del precio multiplicada 
                                                por la cantidad que he pasado a tipo number usando Number(cantidad)
                                            */
console.log("Nombre: " + nombre + " Cantidad: " + cantidad + " Total: " + total); //Muestro todo concatenando y haciendo una cadena