// Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

let sum = 0

function sumatoriaReRara() {
    for (let i = 0; i <= 100; i++) {
        sum += i
    }    
    return sum
}

console.log(sumatoriaReRara())