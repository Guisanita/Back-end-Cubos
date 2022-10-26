const produtos = [
    { nome: "arroz", preco: 500 },
    { nome: "carne", preco: 3200 },
    { nome: "biscoito", preco: 450 },
    { nome: "banana", preco: 320 }
]

function calcularDesconto(arrayProdutos) {
    const arrayComDesconto = arrayProdutos.map((produto) => {
        return {
            ...produto,
            desconto: produto.preco * 0.1
        }
    })

    console.log(arrayComDesconto);
}

calcularDesconto(produtos)