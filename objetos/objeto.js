const aluno = { // O {} é o que indica o objeto, tudo que está dentro dos {} é objeto?
    nome: "Giovanna",
    idade: 15,
    curso: "Desemvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome); // chamando somente o nome
console.log(aluno["idade"]); // chamando somente a idade

aluno.matricula = "2025A"; // adicionar 
aluno.idade = 18; // alterar

delete aluno.curso; // remover

console.log(aluno);