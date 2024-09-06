
const { usuarios } = require('./variaveis.js');


let maioresDeIdade = usuarios.filter(user => user.idade >= 18);
console.log(maioresDeIdade);
