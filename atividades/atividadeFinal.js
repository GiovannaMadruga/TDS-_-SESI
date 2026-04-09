let listaDeHardware = ["CPU", "GPU", "RAM", "SSD", "Placa-mãe"];
//console.log(typeof listaDeHardware);

listaDeHardware.push("cooler");
console.log(listaDeHardware);

let clienteNome = "Gio";
let clienteIdade = 56;
let possuiCupom = true;
console.log(possuiCupom+"\n"+clienteNome+"\n"+clienteIdade);

function processarVenda(valorTotal, cupomAtivo) {
    console.log(`${valorTotal} - ${cupomAtivo}`);
}
