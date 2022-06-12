//Swapping de variables 1
let contenedorA = "liquidoA";
let contenedorB = "liquidoB";
/* 
    Escriba su codigo aquí
*/

let contenedorC = contenedorA;
contenedorA = contenedorB;
contenedorB = contenedorC;

/* 
    resultado esperado:
    contenedorA = "liquidoB";
    contenedorB = "liquidoA";
*/
console.log(contenedorA); //liquidoB
console.log(contenedorB); //liquidoA