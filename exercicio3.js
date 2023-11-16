const pessoas = [
    { nome: 'João', altura: 1.75, peso: 80 },
    { nome: 'Maria', altura: 1.68, peso: 60 },
    { nome: 'Pedro', altura: 1.80, peso: 70 },
    { nome: 'Ana', altura: 1.65, peso: 55 },
    { nome: 'Carlos', altura: 1.90, peso: 100 }
];


function calcularIMC(arr){

    for(let i = 0 ; i < arr.length ; i++){

        let imc = (arr[i].peso / arr[i].altura ** 2).toFixed(2)

        console.log(`O IMC de ${arr[i].nome} é ${imc}`)
    }
}

calcularIMC(pessoas)