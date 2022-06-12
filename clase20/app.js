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
]

console.table(likesPorUsuario)

for (let i = 0; i < likesPorUsuario.length; i++) {
    for (let i = 0; i < likesPorUsuario.length; i++) {
        for (let j = 0; j < likesPorUsuario.length - 1; j++) {
            if (likesPorUsuario[j].likes < likesPorUsuario[j + 1].likes) {
            let aux = likesPorUsuario[j];
            likesPorUsuario[j] = likesPorUsuario[j + 1];
            likesPorUsuario[j + 1] = aux;
            }
        }
    }
}

console.table(likesPorUsuario)