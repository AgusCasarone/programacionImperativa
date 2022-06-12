// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:

// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

let prompt = require('prompt');

// let nombre = prompt("¿Cómo te llamás?") 

let nombre = "Jimena"

function esPalindromo(nombre) {
    let manipulable = toArray(nombre)
    let aux = []
    for (let i = 0; i < manipulable.length; i++)
        aux.unshift(manipulable[i])
    if (aux === manipulable)
        return true
    else
        return false
}

esPalindromo(nombre)