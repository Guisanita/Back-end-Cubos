
const pessoa1 = {
    nome: "José",
    idade: 30,
    profissao: "professor",
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        }
        else if (this.idade < 65) {
            return "adulto(a)";
        } else {
            return "idoso(a)";
        }
    },
    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria();
        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}.`);
    }
}

pessoa1.apresentar();
