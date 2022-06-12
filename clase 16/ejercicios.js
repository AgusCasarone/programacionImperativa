// Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”. Visiten este sandbox

function number(){
    for(let recorrido = 0; recorrido <= 100; recorrido++){
        if(recorrido % 3 == 0 && recorrido % 5 == 0){
        console.log( "FizzBuz")
        } else if(recorrido % 3 == 0){
        console.log("Fizz")
        } else if(recorrido % 5 == 0){
        console.log("Buz")
        } else{
        console.log(recorrido)
        }
    }
}

number()

// Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;

let paquete = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function queHayAca (array, index) {
    console.log(array[index]);
}

queHayAca(paquete, 5)

// Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.

let meses = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function cuantosDias(array, mes) {
    console.log(array[mes-1])
}

console.log(cuantosDias(meses, 5))