// Desafio: Verificador de Desconto

var produto1 = 99;
var produto2 = 1;
var valorTotal = produto1 + produto2;

let mensagem = valorTotal < 100 ? "O valor total é de " + valorTotal : "Ganhou 10% de desconto, ficou " + (valorTotal - (valorTotal * 0.10));

console.log(mensagem);