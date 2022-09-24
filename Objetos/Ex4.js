const produtosConsumidos = [
    {
        nomeProduto: "Cerveja",
        precoUnitario: 8500,
        quantidadeProduto: 4
    },
    {
        nomeProduto: "Agua",
        precoUnitario: 500,
        quantidadeProduto: 1
    },
    {
        nomeProduto: "Espeto",
        precoUnitario: 700,
        quantidadeProduto: 2
    }
];

const cliente = {
    nome: "Guilherme",
    idade: 30,
    produto: produtosConsumidos
};

let somaComanda = 0;

for (let item of produtosConsumidos) {
    item = produtosConsumidos.precoUnitario * produtosConsumidos.quantidadeProduto;
    somaComanda = somaComanda + item;
}

console.log(somaComanda);
console.log(`${cliente.nome} obrigado por nos visitar, o valor da sua conta é de R$ ${somaComanda}. Até mais e esperamos você mais vezes.`)