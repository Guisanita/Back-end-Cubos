function apresentacao(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
    else if (pessoa.idade < 65) {
        console.log(`Sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
}

const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}

apresentacao(pessoa1);

const pessoa2 = {
    nome: "Ana",
    idade: 40,
    profissao: "Advogada"
}

apresentacao(pessoa2);

const pessoa3 = {
    nome: "João",
    idade: 12,
    profissao: "estudante"
}

apresentacao(pessoa3);