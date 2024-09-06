
const { numeros } = require('./variaveis.js');


let impares = numeros.filter(num => num % 2 !== 0);
console.log(impares);
