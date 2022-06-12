// Ejercicio 1
// 1- Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio.  
//     a.¿Qué tipo de dato contiene la variable ‘alumnos’?
//      La variable 'alumnos' tiene un array de objetos.

//     b.¿Qué propiedades tiene la estructura definida en el archivo final.js? 
//      Las propiedades son "id", "nombre", "apellido", "legajo" y "notas".


// 2- Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma ascendente. (*) 

console.log("EJERCICIO 1 PUNTO 2: \n")

const alumnos = [
    {
        id: 0,
        nombre: "Leandro",
        apellido: "Borrelli",
        legajo: 20210308,
        notas: [],
    },
    {
        id: 1,
        nombre: "Esteban",
        apellido: "Piazza",
        legajo: 20210211,
        notas: [],
    },
    {
        id: 2,
        nombre: "Martin",
        apellido: "Cejas",
        legajo: 20210218,
        notas: [],
    },
    {
        id: 3,
        nombre: "Karina",
        apellido: "Borgna",
        legajo: 20210516,
        notas: [],
    },
    {
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [],
    },
];

console.log("ANTES \n")
console.log(alumnos)

function ordenarPorLegajo(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].legajo > array[j + 1].legajo) {
                let variableDescartable = array[j]
                array[j] = array[j + 1]
                array[j + 1] = variableDescartable
            }
        }
    }
    return array;
}

console.log("\nDESPUES \n")
console.log(ordenarPorLegajo(alumnos))

// Ejercicio 2

// Dado el objeto 
alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
}

console.log("\nARRAY DE NOTAS ORIGINAL \n")
console.log(alumno.notas)

// 1- Crear un método que retorne el promedio de notas. (*)

console.log("\nEJERCICIO 2 PUNTO 1: \n")

function promedioDeNotas(listaDeNotas) {
    let sumaDeNotas = 0
    for (let i = 0; i < listaDeNotas.length; i++) {
        sumaDeNotas += listaDeNotas[i]
    }
    return (sumaDeNotas / listaDeNotas.length)
}

console.log("PROMEDIO DE NOTAS:")
console.log(promedioDeNotas(alumno.notas))

// 2- Crear una función que ordene las notas del alumno de forma descendente. (*)

console.log("\nEJERCICIO 2 PUNTO 2: \n")

function ordenarPorNota(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                let variableDescartable = array[j]
                array[j] = array[j + 1]
                array[j + 1] = variableDescartable
            }
        }
    }
    return array;
}

console.log("NOTAS ORDENADAS:")
console.log(ordenarPorNota(alumno.notas))

// Ejercicio 3

// 1- Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada una de sus posiciones.

console.log("\nEJERCICIO 3 PUNTO 1: \n")

function matrizTresPorTres() {
    let arrayMatriz = []
    let numero = 1
    for (let i = 0; i < 3; i++) {
        let contador = [];
        for (let j = 0; j < 3; j++) {
        contador.push(numero++)
        }
            arrayMatriz.push(contador)
    }
    return arrayMatriz;
}
console.table(matrizTresPorTres());

// 2- Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 3.

console.log("\nEJERCICIO 3 PUNTO 2: \n")

function sumatoriaDeMultiplosDeTresEnLaMatriz(matriz) {
    let sumatoria = 0
    for(let i = 0; i < matriz.length ; i++){
        for( let j = 0; j < matriz[i].length ; j++){
            if(matriz[i][j] % 3 === 0){
                sumatoria += matriz[i][j]
            }
        }
    }
    return sumatoria
}

console.log("La sumatoria de los múltiplos de 3 en la matriz es: " + sumatoriaDeMultiplosDeTresEnLaMatriz(matrizTresPorTres()))

// 3- Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es par.

console.log("\nEJERCICIO 3 PUNTO 3: \n")

function sumaDeMatrizEsPar(matriz) { 
    let sumatoria = 0
    for(let i = 0; i < matriz.length ; i++){
        for( let j = 0; j < matriz[i].length ; j++){
            sumatoria += matriz[i][j]
        }
    }
    console.log("La sumatoria total es: " + sumatoria)
    if (sumatoria % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log("¿La sumatoria de la matriz es par? " + sumaDeMatrizEsPar(matrizTresPorTres()))

// 4- Crear una función que retorne la suma de las diagonales de la matriz.

console.log("\nEJERCICIO 3 PUNTO 4: \n")

function sumaDeDiagonales(matriz) {
    let sumaDiagonalUno = 0
    let sumaDiagonalDos = 0

    for (let i = 0; i < matriz.length; i++) { 
        sumaDiagonalUno = sumaDiagonalUno + matriz[i][i]
        sumaDiagonalDos = sumaDiagonalDos + (matriz[i][(matriz.length - 1) - i])
    }
    return [sumaDiagonalUno, sumaDiagonalDos];
}

console.log(sumaDeDiagonales(matrizTresPorTres()))