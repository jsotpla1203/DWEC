"use strict"

const parrafo1 = document.querySelector("#parrafo1");
const parrafo2 = document.querySelector("#parrafo2");
const pre = document.querySelector("#pre");
const mensaje = document.querySelector("#mensaje");

//Primeros dos párrafos
parrafo1.textContent = "<strong>Importante</strong>"; //TextContent solo cambia el texto
parrafo2.innerHTML = "<strong>Importante</strong>"; //innerHTML lo interpreta como html

pre.textContent = parrafo2.outerHTML + parrafo1.outerHTML; //outerHTML muestra la etiqueta, el id, los atributos, etx

const m = prompt("Escribe un mensaje");
if(m == null || m == ""){ //Si esta vacio
    mensaje.textContent = "Entrada cancelada"; //Uso textContent para mostrar exclusivamente texto
}
else{
    mensaje.textContent = m; //Si no esta vacio cambio el texto con lo escrito en prompt
};