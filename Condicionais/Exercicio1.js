const valorCompra = 100;
const numeroParcelas = 3;

if (numeroParcelas === 1) {
    let vista = valorCompra * 0.9;
    console.log(`Como você pagará à vista, o valor do produto é ${vista}.`);
} else {
    let parcela = valorCompra / numeroParcelas;
    console.log(`Como você pagará em ${numeroParcelas} vezes, o valor de cada parcela é ${parcela}.`);
}

if (numeroParcelas === 1) {
    let desconto = valorCompra * 0.1;
    let valorComDesconto = valorCompra - desconto;
    console.log(`Como você pagará à vista, o valor do produto é ${valorComDesconto}.`);
} else {
    let parcela = valorCompra / numeroParcelas;
    console.log(`Como você pagará em ${numeroParcelas} vezes, o valor de cada parcela é ${parcela}.`);
}

if (numeroParcelas === 1) {
    let desconto = valorCompra * 0.1;
    let valorComDesconto = valorCompra - desconto;
    console.log(`Como você pagará à vista, o valor do produto é ${valorComDesconto}.`);
} else {
    let parcela = (valorCompra / numeroParcelas).toFixed(2);
    console.log(`Como você pagará em ${numeroParcelas} vezes, o valor de cada parcela é ${parcela}.`);
}

