"use strict";

const FECHA_NAC = new Date("2007-03-12");
const FECHA_HOY = new Date();

let edad = FECHA_HOY.getFullYear() - FECHA_NAC.getFullYear(); 
console.log (edad);