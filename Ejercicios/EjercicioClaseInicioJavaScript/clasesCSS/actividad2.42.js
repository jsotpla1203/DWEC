"use strict";

const enlaces = document.getElementsByTagName("a"); //Asignamos los "a" a enlaces

for(let enlace of enlaces){ //Blucle for each para recorer enlaces

    const href = enlace.getAttribute("href"); //Extrae el texto que hay dentro de href

    if(href !== null && href.includes("://") && !href.startsWith("http://internal.com")){ /*Comprobamos si tiene atributo href, incluye ://, 
                                                                                           no empieza por http://internal.com* y  no sea nula */
        enlace.style.setProperty("color", "orange"); //Cambiamos la propiedad color a naranja
    };
};