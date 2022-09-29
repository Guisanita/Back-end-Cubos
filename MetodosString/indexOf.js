const email = "teste@teste.com";

if (email.includes("@")) {
    if (email.indexOf(".", email.indexOf("@")) = -1) {
        console.log("Email inválido.")
    } else {
        console.log("Email válido.")
    }
} else {
    console.log("Email inválido.")
}