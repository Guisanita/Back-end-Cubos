const pessoa = {
    nome: "Gui",
    altura: 1.66,
    peso: 72,
    cidade: "Ribeirão Preto",
    profissao: "Dev"
}

const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
}

const objetoFundido = {
    ...pessoa,
    ...carro,
    novaPropriedade: 52
}

console.log(objetoFundido);