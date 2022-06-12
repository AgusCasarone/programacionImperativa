/* intercambiar el primer y segundo elemento
*/
let numeros = [100,99, 1, 2, 3];
/*
    Escriba su codigo aquí...
*/

let arrayVacio = numeros[1]

numeros[1] = numeros[0]
numeros[0] = arrayVacio


console.log(numeros); //[ 99, 100, 1, 2, 3 ]