const valorCompra = 100;
const numeroParcelas = 4;

if (numeroParcelas === 1) {
    let vista = valorCompra * 0.9;
    console.log(`Como você pagará à vista, o valor do produto é ${vista}.`);
} else {
    let parcela = valorCompra / numeroParcelas;
    console.log(`Como você pagará em ${numeroParcelas} vezes, o valor de cada parcela é ${parcela}.`);
}