const prompt = require('prompt-sync')({sigint: true});

//la lista de clientes.
let arrayCuentas = [
    
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];
// podes continuar tu codigo a partir de aca!

// CREAR OBJETO BANCO CON LA PROPIEDAD CLIENTES

// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);

// let consulta = prompt("¿A quién buscás?")

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function buscar() {
        consulta = prompt("¿A quién buscás? ")
        for (i = 0; i < this.clientes.length; i++) {
            if (consulta == this.clientes[i].titularCuenta) {
                return(this.clientes[i]);
            }
        }
    }
}

console.log(banco.consultarCliente())