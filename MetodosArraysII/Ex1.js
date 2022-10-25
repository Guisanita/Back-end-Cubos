const usuarios = [
    {
        nome: "José",
        idade: 18
    },

    {
        nome: "Renata",
        idade: 19
    },

    {
        nome: "Rafael",
        idade: 25
    }
]


function descobrirIdades(usuarios) {
    const idades = usuarios.every((idade) => {
        return idade.idade >= 18
    });

    if (idades) {
        console.log("Festa liberada!");
    } else {
        console.log("Possui menor de idade");
    }
}

descobrirIdades(usuarios);