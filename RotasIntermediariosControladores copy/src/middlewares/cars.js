//Minha resolução
// const password = (req, res, next) => {
//     const { senha } = req.query;

//     if (senha === "carros123") {
//         next();
//     } else {
//         return res.send("Acesso negado, senha incorreta");
//     }
// }

//Resolução Professor
const password = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.send("A senha não foi informada");
    } else if (senha !== "carros123") {
        return res.send("Acesso negado, senha incorreta");
    }

    next();
}

module.exports = password;