// Ejercicio 1:

console.log("EJERCICIO 1\n")

//  Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
// nombre
// apellido 
// camada
// esParcial (VERDADERO)


let estudiante = {    
    nombre: 'Agustina',
    apellido: 'Casarone',
    camada: '7',
    esParcial: true,
}

// 2.  Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
// 	 NOTA < 4 :           desaprobado
//  4 <= NOTA < 7 :  debe rendir examen final 
// 	 NOTA >= 7 :         promocionado.  
// La función deberá retornar la condición final del alumno (solo retorna la palabra). 
// Al momento de llamar a la función, deberás mostrar la siguiente frase: 
// 	“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” 

let notaDelAlumno = 10

function condicionDeAlumno(nota) {
    let estado = "desconocido"
    if (nota < 4)
        estado = "desaprobado"
    else if (nota >= 4 && nota < 7)
        estado = "debe rendir examen final"
    else if (nota >=7 && nota <= 10)
        estado = "promocionado"
    return estado
}

console.log("El alumno obtuvo una nota igual a " + notaDelAlumno + " por lo tanto su condición es " + condicionDeAlumno(notaDelAlumno) + ".")

// Ejercicio 2:

console.log("\nEJERCICIO 2\n")

// Crea 1 array llamado clase.  

let clase = []

// Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
// Ej: Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1

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

// Agrega estos 3 objetos al array llamado clase.

clase.push(alumno1)
clase.push(alumno2)
clase.push(alumno3) 

// Imprimir el array para ver que contenga esos objetos.

console.log("Array clase antes de usar la funcion siguienteCursada:")
console.log(clase)

// Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 

function siguienteCursada(array) {
    for (let i = 0; i < array.length; i++)
        array[i].bimestre++
}

// Deberás hacer el correcto llamado de la función mostrando el array clase antes y después de llamar a siguienteCursada. 

siguienteCursada(clase)

console.log("\nArray clase después de usar la funcion siguienteCursada:")
console.log(clase)

// Ejercicio 3:

console.log("\nEJERCICIO 3\n")

// 1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo en PlayGround (true, false). Para ello deberán: 
// Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas para la aprobación de la materia, en este caso serán 23 asistencias mínimas. 
// La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante PlayGround del alumno.
// Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su progreso final está completo. Si alguna de estas opciones no se cumple, el alumno será automáticamente desaprobado. 
// Deberá retornar un string aprobado o desaprobado según corresponda

const asistenciaMinima = 23

let playgroundCompletoDelAlumno = true
let asistenciaDelAlumno = 25

function aprobacion(asistenciaAlumno, condicionPlayground){
    if (asistenciaAlumno >= asistenciaMinima && condicionPlayground == true)
        return "Aprobado"
    else
        return "Desaprobado"
}

console.log(aprobacion(asistenciaDelAlumno, playgroundCompletoDelAlumno))