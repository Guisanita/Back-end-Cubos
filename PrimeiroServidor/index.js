// const lodash = require("lodash");
const { uniq } = require("lodash")

const array = [1, 2, 4, 4, 5, 6, 4, 7];

// const arrayUnico = lodash.uniq(array);
const arrayUnico = uniq(array);

console.log(arrayUnico);