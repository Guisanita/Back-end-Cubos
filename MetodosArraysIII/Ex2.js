const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" }
]

function ordenarArray(array, campoParaOrdenar) {

    array.sort((a, b) => {
        return a[campoParaOrdenar].localeCompare(b[campoParaOrdenar]);
    })

    console.log(array);
}

ordenarArray(carros, "marca");
ordenarArray(carros, "nome");
ordenarArray(carros, "ano");
ordenarArray(carros, "cor");