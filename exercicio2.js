const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
];

function some(arr){

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].salario >= 1500){
            console.log(`${arr[i].nome} recebe R$${arr[i].salario},00, logo, seu salário é maior ou igual a R$1500,00.`)

        } else if(arr[i].salario <= 1000){
            console.log(`${arr[i].nome} recebe R$${arr[i].salario},00, logo, seu salário é menor ou igual a R$1000,00.`)

        }
    }
}

some(empregados);