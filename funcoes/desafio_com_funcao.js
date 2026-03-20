/*
Atalho comentário fe várias linhas:
alt + shift + A

DESAFIO: Criar uma função que receba preço e desconto em % e mostre o valor finalcom desconto.
criar outra função que receba preço e quantidade e mostre valor total da compra.
*/

function calcularDesconto (preco, desconto) {
    const valorFinal = preco - (preco * (desconto / 100));
    console.log(`Valor final do produto foi de: ${valorFinal}`);
}

calcularDesconto(1000, 5);

function calcularTotal(preco, quantidade) {
    const valorTotal = preco * quantidade;
    console.log(`Valor total é de: ${valorTotal}`);
}

calcularTotal(100, 12);