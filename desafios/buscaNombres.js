/*
    Tenemos el siguiente array de Nombres, tenemos que desarrollar un algoritmo que permita buscar elementos (nombres)
    y el  mismo indique si encontro o no coincidencia.
    Nota: utilizar la forma que consideres mas adecuada :nerd:  
*/
const prompt = require('prompt-sync') ({sigint: true})

const arrayNombres = ["Thor", "Iron", "Man", "Hulk"];

let nombre = prompt('¿A quién buscás?')

function buscarNombre(array, busqueda) {
    let coincidencia = false
    for (let i = 0; i < array.length; i++)
        if (array[i] === busqueda)
            coincidencia = true
    if (coincidencia === true)
        console.log('¡Lo encontré!')
    else
        console.log('¿Quién te juna?')
}

buscarNombre(arrayNombres, nombre)
