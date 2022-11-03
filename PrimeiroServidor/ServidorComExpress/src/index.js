const express = require("express");

const app = express();

// app.get("/", (requisicao, resposta) => {
//     resposta.send("Olá, esse é o meu primeiro servidor com express")
// });

app.get("/home", (requisicao, resposta) => {
    resposta.send("Olá, esse é o meu primeiro servidor com express")
});

app.listen(3000);