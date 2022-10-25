const arquivos = ["exemplo.pdf", "virus.jpeg", "texto.txt", "teste.bat"];

function verificarVirus(arrayNomesArquivos) {
    const resultado = arrayNomesArquivos.some((nome) => {
        return nome.slice(-4) === ".bat"
    })

    if (resultado) {
        console.log("vírus detectado");
    } else {
        console.log("nenhum vírus encontrado");
    }
}

verificarVirus(arquivos);