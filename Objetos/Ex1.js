// const pessoa = {
//     nome: "Guilherme",
//     idade: 30,
//     altura: 1.66,
//     temCNH: true,
//     Apelidos: ["Gui", "Lula"]
// }

// if (pessoa.temCNH) {
//     temCNH = "possui";
// } else {
//     temCNH = "não possui";
// }

// console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${temCNH} CNH e os seguintes apelidos: ${pessoa.Apelidos}.`);

// console.log(pessoa.temCNH);

// Resolução Professor:

const pessoa = {
    nome: "Guilherme",
    idade: 30,
    altura: 1.66,
    temCNH: true,
    Apelidos: ["Gui", "Lula"]
}

let textoCNH = "";

if (pessoa.temCNH) {
    textoCNH = "possui";
} else {
    textoCNH = "não possui";
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} CNH e os seguintes apelidos: 
- ${pessoa.Apelidos[0]} 
- ${pessoa.Apelidos[1]}`);