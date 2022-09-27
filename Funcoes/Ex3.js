const pessoa = {
    nome: "José",
    idade: 30,
    profissao: "professor"
}

function apresentacao(pessoa) {
    if (pessoa.idade < 25) {
        return `Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`
    }
    else if (pessoa.idade < 65) {
        return `Sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`
    } else {
        return `Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}.`
    }
}

console.log(apresentacao(pessoa));