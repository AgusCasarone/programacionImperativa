// Realizar lo siguiente:

// Para buscar a las personas, utilizar el algoritmo de búsqueda binaria.

// Tip: Así como ordenaste una colección con Bubblesort, fijándote en una propiedad numérica, podrás aplicar el algoritmo de búsqueda binaria de la misma manera. Solo tendrás que identificar cuál es la propiedad numérica que te interesa para la búsqueda.

const prompt = require('prompt-sync')({sigint: true});

let personas = [
    {
        id: 1,
        nombre: "Ale",
        edad: 15
    },
    {
        id: 2,
        nombre: "Javi",
        edad: 83
    },
    {
        id: 3,
        nombre: "Luis",
        edad: 26
    },
    {
        id: 4,
        nombre: "Dan",
        edad: 16
    },
    {
        id: 5,
        nombre: "Tito",
        edad: 22
    },
    {
        id: 6,
        nombre: "Marina",
        edad: 76
    },
    {
        id: 7,
        nombre: "Susy",
        edad: 35
    },
    {
        id: 8,
        nombre: "John",
        edad: 25
    },
]

// Ordenar la colección de menor a mayor utilizando bubble sort.

function organizar(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].edad > array[j + 1].edad) {
                let aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
    return array
}

console.table(organizar(personas))

// Crear una función que te permita imprimir por consola el nombre correspondiente a la siguientes edades:
// 25
// 76
// 16
// 15

let buscar = prompt("¿Cuántos años tiene?")

// function buscarPorEdades(edad, array) {
//     if (array[array.length/2] > edad) {
//         buscarPorEdades(edad, array)
//     } else {
//         break
//     }
// }

const binarySearch = (list, item) => {
	// punto mas bajo
	let low = 0;
	// punto mas alto
	let high = list.length - 1;

	// mientras que low sea menor o igual que high
	while (low <= high) {
		// encontramos la mitad entre low y high
		const mid = Math.floor((low + high) / 2);

		// adivinar si el valor es el de la mitad
		const guess = list[mid];
		// si es asi, retornar esa posiciona
		if (guess === item) {
			return mid;
		}
		// si lo propuesto es mayor que lo
		// que estamos buscando
		if (guess > item) {
			//
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null; // si no encontramos nada
};
