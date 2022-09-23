// const produto = {
//     nome: "Cerveja",
//     preco: 8500,
//     quantidade: 4
// };

// const cliente = {
//     nome: "Guilherme",
//     idade: 30,
//     produto
// };

// console.log(cliente);

// Resolução Professor:

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

console.log(cliente);