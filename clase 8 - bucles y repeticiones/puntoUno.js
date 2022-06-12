// Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

let number = 456

function contarDiezMas (start) {
    for (let i = start; i < start + 10; i++) {
        console.log(i)
    }
}

contarDiezMas(number)