// Revisa el siguiente archivo, identifica sus componentes, vamos a estar usándolos a lo largo de este ejercicio. 
// ¿Qué tipo de dato contiene la variable “alumnos”? un array de objetos
// ¿Cuáles son las claves que puedes identificar? "id", "nombre", "apellido", "legajo" y "notas"

// Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma descendente. (*) 
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

console.log(alumnos)

function ordenarPorLegajo(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].legajo < array[j + 1].legajo) {
                let variableDescartable = array[j]
                array[j] = array[j + 1]
                array[j + 1] = variableDescartable
            }
        }
    }
    return array;
}
console.log(ordenarPorLegajo(alumnos))

// Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma descendente. (*) 
// Ejercicio 2
// Dado el objeto 
alumno = {
id: 5,
nombre: "Lucas",
apellido: "Astrada",
legajo: 20220125,
notas: [10,6,8,7,9]
}
// Crear un método que retorne el promedio de notas. 

function promedioDeNotas(notas) {
    let totalNotas = 0
    for (let i = 0; i < notas.length; i++) {
        totalNotas += notas[i]
    }
    return (totalNotas / notas.length)
}

// Crear una función que ordene las notas del alumno de forma ascendente. (*)
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
// Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.

function matriz3x3Negativa() {
    let matriz = []
    let contador = -1
    for (let i = 0; i < 3; i++) {
        let arrayNuevo = [];
        for (let j = 0; j < 3; j++) {
        arrayNuevo.push(contador--)
        }
            matriz.push(arrayNuevo)
    }
    return matriz;
}
console.table(matriz3x3Negativa());

// Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 5. 

function sumatoriaMultiplosDe5(matriz){
    let sumaMultiplosDe5 = 0
    for(let i = 0; i < matriz.length ; i++){
        for( let j = 0; j < matriz[i].length ; j++){
            if(matriz[i][j] % 5 === 0){
                sumaMultiplosDe5 += matriz[i][j];
            }
        }
    }
    return sumaMultiplosDe5;
}

console.log(sumatoriaMultiplosDe5(matriz3x3Negativa()))

// Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es impar.

function sumaEsPar(matriz) { 
    let suma = 0
    for(let i = 0; i < matriz.length ; i++){
        for( let j = 0; j < matriz[i].length ; j++){
            suma += matriz[i][j]
        }
    }
    if (suma % 2 === 0) {
        return false
    } else {
        return true
    }
}

console.log(sumaEsPar(matriz3x3Negativa()))

// Crear una función que retorne la multiplicación de las diagonales de la matriz. 

function multiplicacionDeDiagonales(matriz) {
    let diagonalUno = 1
    let diagonalDos = 1

    for (let i = 0; i < matriz.length; i++) { 
        diagonalUno = diagonalUno * matriz[i][i]
        diagonalDos = diagonalDos * (matriz[i][(matriz.length - 1) - i])
    }
    return [diagonalUno, diagonalDos];
}

console.log(multiplicacionDeDiagonales(matriz3x3Negativa()))

// (*) Deberás mostrar por consola antes y después de función o método que implementaste. Utiliza VisualStudio code. 

