// const email = "teste@teste.com";

// if (email.includes("@")) {
//     if (email.indexOf(".", email.indexOf("@")) = -1) {
//         console.log("Email inválido.")
//     } else {
//         console.log("Email válido.")
//     }
// } else {
//     console.log("Email inválido.")
// }

const possivelEmail = "teste.teste@teste.com";

const indexArroba = possivelEmail.indexOf("@");
const indexPontoDepoisArroba = possivelEmail.indexOf(".", indexArroba);

if (indexPontoDepoisArroba > indexArroba) {
    console.log("atende as requisições");
} else {
    console.log("Não há ponto depois do Arroba.");
}

