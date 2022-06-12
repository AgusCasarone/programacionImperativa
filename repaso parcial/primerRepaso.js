// EJERCICIO 1

// 1- Escribir un objeto literal llamado ESTUDIANTE que contenga las siguientes propiedades con mis datos:
//     a- nombre
//     b- apellido
//     c- camada
//     d- esParcial (VERDADERO)

let estudiante = {    
        nombre: 'Agustina',
        apellido: 'Casarone',
        camada: '7',
        esParcial: true,
}

// 2- Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno:
//     NOTA < 4 :      desaprobado
//     4 <= NOTA < 7 : rinde final
//     NOTA <= 7 :     promocionado
//     La función debe retornar la condición final del alumno (solo retorna la palabra), nos devuelva la situación del alumno (solo retorna la palabra).
//     Al momento de llamar a la función, deberás mostrar la siguiente frase:
//     "El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]"

function condicionDeAlumno(nota) {
    let estado = "unknown"
    if (nota < 4)
        estado = "desaprobado"
    else if (nota >= 4 && nota < 7)
        estado = "debe rendir examen final"
    else if (nota >=7 && nota < 10)
        estado = "promocionado"
    return "El alumno obtuvo una nota igual a " + nota + " por lo tanto su condición es " + estado + "."
}

console.log(condicionDeAlumno(6))

// EJERCICIO 2

// 1- Crea 1 array llamado CLASE.

let clase = []

// 2- Crea 3 objetos literales con las propiedades NOMBRES, APELLIDOS y BIMESTRE de 3 compañeros.
//     Ej: Esteban Piazza 1 - Leandro Borelli 1 - Martín Cejas 1

let alumno1 = {
        nombres: "Esteban",
        apellidos: "Piazza",
        bimestre: 1,
}
let alumno2 = {
        nombres: "Leandro",
        apellidos: "Borelli",
        bimestre: 1,
}
let alumno3 = {
        nombres: "Martín",
        apellidos: "Cejas",
        bimestre: 1,
}

//         a. Agrega estos 3 objetos al array llamado CLASE.

clase.push(alumno1)
clase.push(alumno2)
clase.push(alumno3) 


//         b. Imprimir el array para ver que contenga esos objetos.

console.log(clase)

// 3- Crea una función que reciba el array CLASE como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición.

function siguienteCursada(array) {
    for (let i = 0; i < array.length; i++)
        array[i].bimestre++
}

// 4- Deberás hacer el correcto llamado de la función mostrando el array CLASE antes y después de llamar a siguienteCursada.

siguienteCursada(clase)

console.log(clase)