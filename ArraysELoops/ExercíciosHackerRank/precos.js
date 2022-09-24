const precos = [100, 500, 100, 200, 50];

let soma = 0

if (precos.length >= 5) {
    for (let preco of precos) {
        soma = soma + preco;
    }

    let precos2 = precos
    while (precos2.length !== 1) {
        if (precos2[0] < precos2[precos2.lenght - 1]) {
            precos2.pop();
        } else {
            precos2.shift();
        }

    }
    soma = soma - precos2[0];
} else {
    for (let preco of precos) {
        soma = soma + preco;
    }
}

console.log(soma);