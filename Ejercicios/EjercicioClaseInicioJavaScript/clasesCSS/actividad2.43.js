"use strict";

{
    const elementos = document.querySelectorAll("body, body *");

    for (const elemento of elementos) {
        elemento.style.setProperty("font-family", "Arial, sans-serif", "important");
        // Añade aquí las otras cuatro propiedades del bloque CSS.
        elemento.style.setProperty("line-height", "1.6", "important");
        elemento.style.setProperty("color", "#1F2937", "important");
        elemento.style.setProperty("background", "#FFF8E7", "important");
    };
};



/*
body, body * {
    font-family: Arial, sans-serif !important;
    font-size: 20px !important;
    line-height: 1.6 !important;
    color: #1F2937 !important;
    background: #FFF8E7 !important;
};
*/