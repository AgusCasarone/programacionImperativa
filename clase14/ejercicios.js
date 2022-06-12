// A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
// Obtener en un nuevo array las edades menores a 18.
// Obtener en un nuevo array las edades mayor o igual a 18.
// Obtener en un nuevo array las edades igual a 18.
// Obtener el menor.
// Obtener el mayor. 
// Obtener el promedio de edades.
// Incrementar en 1 todas las edades.


const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let menores = edades.filter(edades => edades < 18)
let mayoresOIguales = edades.filter(edades => edades >= 18)
let iguales = edades.filter(edades => edades == 18)
let menorDeTodos = Math.min.apply(null,edades)
let mayorDeTodos = Math.max.apply(null,edades)

// Obtener el promedio de edades.

function promedio(todosLosNumeros) {
    let sumatoria = 0;
    for (let i = 0; i < todosLosNumeros.length; i++) {
        sumatoria += todosLosNumeros[i]
    }
    return sumatoria / todosLosNumeros.length
}

// Incrementar en 1 todas las edades.



console.log(menorDeTodos)