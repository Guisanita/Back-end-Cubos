const imprimirMensagem = (nome) => {
    console.log(`Olá ${nome}`);
}

setTimeout(imprimirMensagem, 2000, ["Maria", "Guido"]);