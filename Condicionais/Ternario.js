const saldo = 6

if (saldo > 1) {
    console.log(`Seu saldo é ${saldo} reais.`);
} else if (saldo === 0) {
    console.log("Você não tem saldo.");
} else if (saldo === 1) {
    console.log("Seu saldo é 1 real");
} else if (saldo < 0) {
    console.log("Seu saldo é negativo");
} else {
    console.log(`Seu saldo é ${saldo} centavos`);
}