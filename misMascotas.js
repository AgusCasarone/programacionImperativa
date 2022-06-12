let misMascotas = [
    {
        nombre: "Aro",
        raza: "mestiza",
        edad: 4,
        sonido: "guau",
        repetirSonido: function () {
            return `${this.sonido} ${this.sonido}`;
        },
    },
    {
        nombre: "Michi",
        raza: "ciames",
        edad: 2,
        sonido: "miau",
        repetirSonido: function () {
            return `${this.sonido} ${this.sonido}`;
        },
    },
];

console.log(misMascotas[1].repetirSonido());