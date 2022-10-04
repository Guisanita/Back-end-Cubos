function inverterString(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    let textoInvertido = arrayDeLetras.join("");

    console.log(textoInvertido);
}

inverterString("Cubos Academy");