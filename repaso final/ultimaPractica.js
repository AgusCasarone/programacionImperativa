// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

// Necesitamos 10 arrays c/u tiene que 10 giladas

// function generadorDeMatriz(filas, columnas){
//     let matrizAgustina = []
//     for (let i = 0; i < filas; i++) {
//         let fila = []
//         for (let j = 1; j <= columnas; j++) { 
//             fila.push(i*10 + j)
//         }
//         matrizAgustina.push(fila)
//     }
//     return matrizAgustina
// }

// console.table(generadorDeMatriz(5))

function generarMatriz10por10() {
    let matriz = [];
    let valor = 1;
    for (let fila = 0; fila < 10; fila++) {
        let array = [];
        for (let col = 0; col < 10; col++) {
        array.push(valor++);
        }
            matriz.push(array);
    }
    return matriz;
}
console.table(generarMatriz10por10());

// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let likesPorUsuario = [
    {
        Usuario: "agus",
        likes: 138,
    },
    {
        Usuario: "Cami",
        likes: 1,
    },
    {
        Usuario: "ibis",
        likes: 13,
    },
    {
        Usuario: "vero",
        likes: 56,
    },
    {
        Usuario: "diani",
        likes: 6,
    },
    {
        Usuario: "jime",
        likes: 25,
    },
    {
        Usuario: "denu",
        likes: 54,
    },
    {
        Usuario: "juli",
        likes: 90,
    },
    {
        Usuario: "dana",
        likes: 78,
    },
    {
        Usuario: "flor",
        likes: 85,
    },
    {
        Usuario: "ale",
        likes: 96,
    },
    {
        Usuario: "carly",
        likes: 59,
    },
    {
        Usuario: "lu",
        likes: 2,
    },
    {
        Usuario: "lean",
        likes: 56,
    },
    {
        Usuario: "almen",
        likes: 47,
    },
    {
        Usuario: "Bianca",
        likes: -1000,
    }
]

console.log(contarLikes(likesPorUsuario))

function contarLikes(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].likes > array[j + 1].likes) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}

console.log(contarLikes(likesPorUsuario))