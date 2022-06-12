// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let registroDeDias = [
    {
        dia: 1,
        mes: 1,
        tempMax: 45,
        tempMin: 40,
    },
    {
        dia: 20,
        mes: 12,
        tempMax: 28,
        tempMin: 20,
    },
    {
        dia: 25,
        mes: 8,
        tempMax: 18,
        tempMin: 12,
    },
    {
        dia: 1,
        mes: 5,
        tempMax: 20,
        tempMin: 8,
    },
    {
        dia: 18,
        mes: 6,
        tempMax: 12,
        tempMin: 7,
    },
    {
        dia: 21,
        mes: 9,
        tempMax: 27,
        tempMin: 22,
    },
    {
        dia: 9,
        mes: 5,
        tempMax: 8,
        tempMin: 3,
    },
    {
        dia: 13,
        mes: 4,
        tempMax: 24,
        tempMin: 2,
    },
];

console.table(registroDeDias)

for (let i = 0; i < registroDeDias.length; i++) {
    for (let i = 0; i < registroDeDias.length; i++) {
        for (let j = 0; j < registroDeDias.length - 1; j++) {
            if (registroDeDias[j].tempMax < registroDeDias[j + 1].tempMax) {
            let aux = registroDeDias[j];
            registroDeDias[j] = registroDeDias[j + 1];
            registroDeDias[j + 1] = aux;
            }
        }
    }
}

console.table(registroDeDias)

for (let i = 0; i < registroDeDias.length; i++) {
    for (let i = 0; i < registroDeDias.length; i++) {
        for (let j = 0; j < registroDeDias.length - 1; j++) {
            if (registroDeDias[j].tempMin > registroDeDias[j + 1].tempMin) {
            let aux = registroDeDias[j];
            registroDeDias[j] = registroDeDias[j + 1];
            registroDeDias[j + 1] = aux;
            }
        }
    }
}

console.table(registroDeDias)