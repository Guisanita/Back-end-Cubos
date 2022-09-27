function verificarMaioridade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let valorRetornado = verificarMaioridade(20);
console.log(valorRetornado);