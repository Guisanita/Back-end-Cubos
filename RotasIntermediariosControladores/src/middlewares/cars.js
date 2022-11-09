const password = (req, res, next) => {
    const { senha } = req.query;

    if (senha === "carros123") {
        next();
    } else {
        return res.send("Acesso negado, senha incorreta");
    }
}

module.exports = password;