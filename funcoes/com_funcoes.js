const produto1 = "Notebook da Apple";
const produto2 = "Notebook da Samsung";
const produto3 = "Mouse";
const preco1 = 8500;
const preco2 = 2100;
const preco3 = 150;

function exibirProduto() {
    console.log(`${produto1} -> ${preco1}`);
    console.log(`${produto2} -> ${preco2}`);
    console.log(`${produto3} -> ${preco3}`);
}

console.log("É um " + produto1 + " e custa " + preco1 + " reais.");
console.log(`Esse é o ${produto2} e custa ${preco2} reais.`);
console.log(`Esse é ${produto3} e custa ${preco3} reais.`);

exibirProduto(2);