const produtosConsumidos = [
    {
        nomeProduto: "Cerveja",
        precoUnitario: 850,
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
    somaComanda = somaComanda + (item.precoUnitario * item.quantidadeProduto);
}

somaComanda = (somaComanda / 100).toFixed(2);

console.log(`${cliente.nome} obrigado por nos visitar, o valor da sua conta é de R$ ${somaComanda}. Até mais e esperamos você mais vezes.`)