// DESAFIO: Impreimir contatenando e com template string

function calcularTotal (preco1, preco2, preco3) {
    return preco1 + preco2 + preco3;
}

const produto1 = "Notebook da Apple";
const produto2 = "Notebook da Samsung";
const produto3 = "Mouse";
const preco1 = 8500;
const preco2 = 2100;
const preco3 = 150;

console.log("É um " + produto1 + " e custa " + preco1 + " reais.");
console.log(`Esse é o ${produto2} e custa ${preco2} reais.`);
console.log(`Esse é ${produto3} e custa ${preco3} reais.`);

let resultado = calcularTotal(preco1, preco2, preco3); // Somar
console.log("O total da compra será de " + resultado + ". Vai querer?"); // contatenando 

