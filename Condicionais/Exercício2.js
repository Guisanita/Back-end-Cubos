const valorCompra = 100;
const numeroParcelas = 12;


if (numeroParcelas === 1) {
    let desconto = valorCompra * 0.1;
    let valorComDesconto = valorCompra - desconto;
    console.log(`Como você pagará à vista, o valor do produto é ${valorComDesconto}.`);
} else if (numeroParcelas <= 6) {
    let parcela = (valorCompra / numeroParcelas).toFixed(2);
    console.log(`Como você pagará em ${numeroParcelas} vezes, o valor de cada parcela é ${parcela}.`);
} else {
    let montante = valorCompra * ((1 + 0.01) ** numeroParcelas);
    let parcela2 = (montante / numeroParcelas).toFixed(2);
    console.log(`Como você pagará em ${numeroParcelas} vezes, o valor de cada parcela é ${parcela2}, já calculado o juros de 1% aa.`);

}