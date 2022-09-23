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

console.log(cliente.nome);
console.log(cliente.idade);
cliente.idade = 45;
console.log(cliente.idade);
console.log(cliente.produto[0].nomeProduto);
console.log(cliente.produto[cliente.produto.length - 1].precoUnitario);
