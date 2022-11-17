let { instrutores, identificadorAula, aulas } = require('../bancodedados');

const cadastrarAulaInstrutor = (req, res) => {

    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    if (!titulo) {
        return res.status(400).json("É obrigatório preencher o titulo");
    }


    if (!descricao) {
        return res.status(400).json("É obrigatório preencher a descrição");
    }

    let instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'Instrutor não encontrado.' });
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula);

    return res.status(201).json(aula);

}

const listarAulas = (req, res) => {
    return res.status(200).json(aulas);
}

const encontrarAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    });

    if (!aula) {
        return res.status(404).json({ mensagem: "Esta aula não existe." })
    }

    return res.status(200).json(aula);
}

const encontrarAulasInstrutor = (req, res) => {
    const { idInstrutor } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    })

    if (!instrutor) {
        return res.status(404).json({ mensagem: "Este instutor não existe." })
    }

    const aulasInstrutor = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id;
    });

    if (aulasInstrutor.length === 0) {
        return res.status(200).json({ mensagem: "Este instrutor não tem aulas no momento." })
    } else {
        return res.status(200).json(aulasInstrutor);
    }


}

module.exports = {
    cadastrarAulaInstrutor,
    listarAulas,
    encontrarAula,
    encontrarAulasInstrutor
}