"use strict";

//1.
const IP = [172,16,25,10];
const MASCARA = [255,255,192,0];

//2.
let dirRed = [];
dirRed[0] = IP[0] & MASCARA[0];
dirRed[1] = IP[1] & MASCARA[1];
dirRed[2] = IP[2] & MASCARA[2];
dirRed[3] = IP[3] & MASCARA[3];

//3.
let complemento = [];

complemento[0] = (~dirRed[0]) & 255;
complemento[1] = (~dirRed[1]) & 255;
complemento[2] = (~dirRed[2]) & 255;
complemento[3] = (~dirRed[3]) & 255;

//4.
let dirHost = [];

dirHost[0] = IP[0] & complemento[0];
dirHost[1] = IP[1] & complemento[1];
dirHost[2] = IP[2] & complemento[2];
dirHost[3] = IP[3] & complemento[3];

//5.
console.log("Dirección de red: " + dirRed[0] + "." + dirRed[1] + "." + dirRed[2] + "." + dirRed[3]);
console.log("Dirección de host: " + dirHost[0] + "." + dirHost[1] + "." + dirHost[2] + "." + dirHost[3]);
console.log("La máscara tiene 18 bits de red y 14 de host");