const palavra = "Alfandega"

let encontrado = false
let soma = 0
for (letra of palavra) {
    if (letra === "a") {
        soma = soma + 1;
        encontrado = true
        console.log(soma);
    }
}

if (!encontrado) {
    console.log("Não tem a");
}