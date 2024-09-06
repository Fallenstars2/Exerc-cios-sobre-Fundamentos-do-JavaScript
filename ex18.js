
const { usuarios } = require('./variaveis.js');


let nomesCompletos = usuarios.map(user => `${user.nome} ${user.sobrenome}`);
console.log(nomesCompletos);
