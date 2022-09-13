const temIngresso = true;
const censura = 16;
const idade = 9;
const acompPais = false;

if (temIngresso) {
    if (idade >= censura || acompPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrado");
    }
} else {
    console.log("Barrado");
}
