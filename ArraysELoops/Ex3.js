const numerosAleatorios = [2, 3, 5, 6, 7, 9];

/* let soma = numerosAleatorios[0] + numerosAleatorios[1] + numerosAleatorios[2] + numerosAleatorios[3] + numerosAleatorios[4] + numerosAleatorios[5];

console.log(soma); */

/*let indice = 0
let soma = numerosAleatorios[indice]
indice++
soma = soma + numerosAleatorios[indice]
indice++
soma = soma + numerosAleatorios[indice]
indice++
soma = soma + numerosAleatorios[indice]
indice++
soma = soma + numerosAleatorios[indice]
indice++
soma = soma + numerosAleatorios[indice]

console.log(soma); */

let indice = 0;
let soma = 0
while (indice < numerosAleatorios.length) {
    indice++;
    soma = soma + numerosAleatorios[indice];
}

console.log(soma);




