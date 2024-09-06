
const { usuarios } = require('./variaveis.js');

let menoresComAnimais = usuarios.filter(user => user.idade < 18 && user.possuiAnimal);
console.log(menoresComAnimais);
