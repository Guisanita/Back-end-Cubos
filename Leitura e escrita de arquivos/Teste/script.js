const fs = require("fs");

console.log("Antes de ler");

fs.readFile("b.txt", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});


console.log("Depois de ler");