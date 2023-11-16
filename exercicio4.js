const alunos = [
    { nome: 'Ana', notas: [3, 3, 3] },
    { nome: 'Pedro', notas: [5, 6, 7] },
    { nome: 'Maria', notas: [9, 8, 10] },
    { nome: 'João', notas: [6, 7, 8] },
    { nome: 'Lucas', notas: [8, 9, 7] },
    { nome: 'Julia', notas: [10, 8, 9] }
];

let listaDeMedias = alunos.map(aluno => {

    let somaNotas = aluno.notas.reduce((soma, nota) => soma + nota, 0);
    let media = somaNotas / aluno.notas.length

    return {nome: aluno.nome,
    media: media}
})

console.log(listaDeMedias)