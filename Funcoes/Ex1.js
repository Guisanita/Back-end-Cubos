const pessoa = {
    nome: "José",
    idade: 66,
    profissao: "Dev",
    altura: 1.6
}

function cumprimento(pessoa) {
    if (pessoa.idade < 12) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou uma criança de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
    } else if (pessoa.idade >= 12 && pessoa.idade < 18) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
    } else if (pessoa.idade >= 18 && pessoa.idade <= 65) {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)

    } else {
        console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
    }

}

cumprimento(pessoa);