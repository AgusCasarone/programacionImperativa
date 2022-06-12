const prompt = require('prompt-sync') ({
    sigint: true
})

const fraseAburrida = prompt('¿Qué querés decir?')

function gritar (frase) {
    console.log("¡" + frase + "!")
}

gritar(fraseAburrida)

