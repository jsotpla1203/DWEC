"use strict";

//1.
const tabla = document.getElementById("age-table"); //Busca un único elemento que tenga id
console.log(tabla);

//2.
const elementosLabel = document.querySelectorAll("#age-table label"); //Devuelve los elementos que coincidan con el selector css
                                                                    /*
                                                                    #age-table label busca todos los label 
                                                                    que estén dentro del elemento con id age-table
                                                                    */
console.log(elementosLabel);

//3.
const primerTd = document.querySelector("#age-table td"); //Devuelve el primer elemento que coincida con el selector css
                                                        /*
                                                        Lo mismo que el de antes pero solo devuelve el primero
                                                        */
console.log(primerTd);

//4.
const search = document.querySelector("form [name = 'search']"); //Devuelve el primer elemento que coincida con el selector css
                                                                /*
                                                                Busca dentro de form un elemento hijo
                                                                que tenga el atributo name=search
                                                                */
console.log(search);

//5.
const primerInput = document.getElementsByTagName("input")[0]; //Busca todos los elementos por la etiqueta html
                                                            /*
                                                            Al añadir [0] al final, le indicamos que queremos sacar el primer elemento
                                                            */
console.log(primerInput);

//6.
const ultimoInput = document.getElementsByTagName("input")
[document.getElementsByTagName("input").length - 1];//Busca todos los elementos por la etiqueta html
                                                    /*
                                                    Al añadir [document.getElementsByTagName("input").length - 1] al final, 
                                                    le indicamos que queremos sacar el último elemento
                                                    */
console.log(ultimoInput.value);