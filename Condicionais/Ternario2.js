const saldo = 1
// if (saldo === 1){
//    unidade = "real"
// } else { 
//    unidade ="reais"
const unidade = (saldo === 1 ? "real" : "reais");

console.log(`Seu saldo é ${saldo} ${unidade}.`);
