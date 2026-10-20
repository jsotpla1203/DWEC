"use strict";

let dni = Number(prompt("La parte numérica del DNI"));

switch(dni % 23){
    case 0:
        console.log(dni + "T")
        break;
    case 1:
        console.log(dni + "R")
        break;
    case 2:
        console.log(dni + "W")
        break;
    case 3:
        console.log(dni + "A")
        break;
    case 4:
        console.log(dni + "G")
        break;
    case 5:
        console.log(dni + "M")
        break;
    case 6:
        console.log(dni + "Y")
        break;
    case 7:
        console.log(dni + "F")
        break;
    case 8:
        console.log(dni + "P")
        break;
    case 9:
        console.log(dni + "D")
        break;
    case 10:
        console.log(dni + "X")
        break;
    case 11:
        console.log(dni + "B")
        break;
    case 12:
        console.log(dni + "N")
        break;
    case 13:
        console.log(dni + "J")
        break;
    case 14:
        console.log(dni + "Z")
        break;
    case 15:
        console.log(dni + "S")
        break;
    case 16:
        console.log(dni + "Q")
        break;
    case 17:
        console.log(dni + "V")
        break;
    case 18:
        console.log(dni + "H")
        break;
    case 19:
        console.log(dni + "L")
        break;
    case 20:
        console.log(dni + "C")
        break;
    case 21:
        console.log(dni + "K")
        break;
    case 22:
        console.log(dni + "E")
        break;
    default:
        console.log("Error")
        break;
};