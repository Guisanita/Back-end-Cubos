const palavra = "Alemanha"


const encontrado = false
for (letra of palavra) {
    if (letra === "h") {
        console.log("Tem h");
        encontrado = true
        break;
    }
}

if (!encontrado) {
    console.log("Não tem h");
}

