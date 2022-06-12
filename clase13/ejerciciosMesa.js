// LOOP DE PARES

// Deberás crear una función llamada loopDePares que reciba como parámetro un número
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop. En caso de
// que el número de la iteración sumado con el número pasado por parámetro sea par,
// mostrará en la consola: “El número X es par”.

const prompt = require('prompt-sync') ({sigint: true});

let num = parseInt(prompt("¿Número?"))

function loopDePares(num) {
    for (let i = 0; i <= 100; i++) {
        num += num
        console.log(num)
        let suma = i + num
        if (suma % 2 == 0) {
            console.log("El número ", i, " es par")
        }
    }
}

console.log(loopDePares(num))