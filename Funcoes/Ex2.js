function faixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade >= 22 && idade <= 65) {
        return "adulto";
    } else {
        return "idoso";
    }
}

console.log(faixaEtaria(50));