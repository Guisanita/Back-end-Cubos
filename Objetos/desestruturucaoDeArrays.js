const array = [1, 2, 3, 4, 5, 6];

// const a = array[0];
// const b = array[1];
// const [a, ...resto, b] = array; - Não funciona

const [a, b, ...resto] = array;    // Spread tem que ser o último. 

console.log(a, b, resto);
