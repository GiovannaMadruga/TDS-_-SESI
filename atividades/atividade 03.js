// Desafio: Validador de Acesso

var temIdade = 14
var acessoVIP = true;

if(temIdade >= 18 && acessoVIP){
    let resultadoAND = "Você pode entrar no eveto VIP = ";
    resultadoAND += temIdade && acessoVIP ;
    console.log(resultadoAND);
} else {
    let resultadoAND = "Você não pode entrar, é menor de 18!"
    console.log(resultadoAND);
}