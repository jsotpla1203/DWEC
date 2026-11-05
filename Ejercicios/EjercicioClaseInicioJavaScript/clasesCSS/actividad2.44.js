"use strict";

const oculto = document.querySelector("ul"); //Lista
const boton = document.querySelector("button"); //Boton


boton.addEventListener("click", () => { //Evento click en el boton
    
    const estaOculto = oculto.classList.toggle("oculto")

    if(estaOculto){
        boton.setAttribute("aria-expanded", "false");
    }
    else{
        boton.setAttribute("aria-expanded", "true");

    }
});