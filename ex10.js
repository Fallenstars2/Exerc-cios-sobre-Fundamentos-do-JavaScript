
function avaliarComprimento(str) {
    let tamanho = str.length;
    if (tamanho <= 5) {
        console.log(`A string '${str}' é pequena.`);
    } else if (tamanho <= 10) {
        console.log(`A string '${str}' é média.`);
    } else {
        console.log(`A string '${str}' é grande.`);
    }
}


avaliarComprimento("exemplo");
avaliarComprimento("exemplomaislonga");
