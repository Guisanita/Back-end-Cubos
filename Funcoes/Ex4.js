function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    }
    else if (idade < 65) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

function apresentacao(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade);
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}

apresentacao(pessoa1);