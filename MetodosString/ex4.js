const nome = "jose messias e junior";

let arrayDeNomes = nome.split(" ");

let nomeFormatado = "";

for (let item of arrayDeNomes) {
    let primeiraLetra = item.slice(0, 1);
    let restanteNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteNome + " ";

}

console.log(nomeFormatado.trim());