const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" }
]

function filtrarProfessores(arrayProfessores) {
    const filtrarProfessoresBackend = arrayProfessores.filter((professor) => {
        return professor.stack === "backend";
    })

    const filtrarProfessoresFrontend = arrayProfessores.filter((professor) => {
        return professor.stack === "frontend";
    })

    console.log("Professores Backend:\n", filtrarProfessoresBackend, "\nProfessores Frontend:\n", filtrarProfessoresFrontend);

}

filtrarProfessores(professores);

