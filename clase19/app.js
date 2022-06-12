const edades = [33, 27, 34, 30, 34, 25];

for (i = 0; i < edades.length; i++){
    let aux = edades[0]
    for (j = 0; j < edades; j++){
        if (edades[i] > edades[j]) {
            aux = edades[j]
            edades[j] = edades[i]
            edades[i] = aux
        }
    }
}

console.log(edades)