// Primeiro vejo se tem ingresso: Não, não entra. Tem, a idade, maior ou igual a censura? entra. Menor que a censura, não entra. 
const temIngresso = true
const censura = 16
const idade = 8

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar");
    } else {
        console.log("Barrado pela censura");
    }
} else {
    console.log("Barrado por falta de ingresso");
}