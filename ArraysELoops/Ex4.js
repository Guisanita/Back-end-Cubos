const palavra = "Alfandega"

let encontrado = false
let soma = 0
for (letra of palavra) {
    if (letra === "a") {
        soma = soma + 1;
        encontrado = true;

    }
}

if (!encontrado) {
    console.log("Não tem a");
} else {
    if (soma === 1) {
        console.log(`A palavra tem 1 letra a`);
    } else {
        console.log(`A palavra tem ${soma} letras a`)
    }

}