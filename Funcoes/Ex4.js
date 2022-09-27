function faixaEtaria(pessoa) {
    if (pessoa.idade < 25) {
        return "jovem";
    }
    else if (pessoa.idade < 65) {
        return "adulto(a)";
    } else {
        return "idoso(a)";
    }
}

function apresentacao(pessoa) {
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria(pessoa)} de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
}

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}

apresentacao(pessoa1);