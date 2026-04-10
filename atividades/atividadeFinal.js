hardwareGamer = []

hardwareGamer [0] = "SDD 512 gb";
hardwareGamer [1] = "Placa-Mãe";
hardwareGamer [2] = "Cooler";
hardwareGamer [3] = "Memoria ram 16gb";
hardwareGamer [4] = "Fonte 650W";

hardwareGamer.push("CPU");
console.log(hardwareGamer)
const clienteNome= []

clienteNome [0] = "Eduarda";
clienteNome [1] = "Isabela";
clienteNome [2] = "Guilherme";
clienteNome [3] = "Miguel";

let ClienteIdade = 46;
let possuiCumpom = true;

console.log(possuiCumpom+"\n"+clienteNome[1]+"\n"+ClienteIdade);
let valorTotal;
function processarVendas(valorTotal, CupomAtivo){
        let menssagem = valorTotal >= 500 || CupomAtivo == true ? valorTotal-(valorTotal * 15)/100 : valorTotal;
        console.log(menssagem);
}
processarVendas(1000, false);

if (ClienteIdade >= 18){
    console.log(`Venda autorizada para ${clienteNome[1]}, ela tem ${ClienteIdade} anos`);
} else {
    console.log(`Venda bloqueada: Menor de idade.`);
}

let estoque = 5
    

    let contador1 = estoque;
        while (contador1 >= 0) {
             console.log(`Saída do item: ${hardwareGamer[contador1]}. -- Estoque: ${estoque}. -- Está OK`);
        contador1--;
        }