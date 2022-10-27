const usuarios = [
    { id: 11, nome: "Joao", idade: 23 },
    { id: 2, nome: "maria", idade: 18 },
    { id: 4, nome: "ana", idade: 30 },
    { id: 1, nome: "rodrigo", idade: 17 },
    { id: 123, nome: "rodrigo", idade: 17 }
]

function encontrarMaiorIdade(arrayObjetos) {
    let objetoComMaiorIdade = {}
    arrayObjetos.reduce((acumulador, elementoAtual) => {
        if (acumulador.idade > elementoAtual.idade) {
            objetoComMaiorIdade = acumulador;
            return objetoComMaiorIdade;
        } else {
            objetoComMaiorIdade = elementoAtual;
            return objetoComMaiorIdade;
        }
    })
    console.log(objetoComMaiorIdade);

}

encontrarMaiorIdade(usuarios);