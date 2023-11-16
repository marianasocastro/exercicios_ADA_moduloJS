
let fruta = ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão']; 
let legume = ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'];
let verdura = ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga']; 

const hortifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia',
 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora',
  'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata'];


function separarHortifrutis(arr){

    let countFrutas = 0;
    let countLegumes = 0;
    let countVerduras = 0;

    for(let i = 0 ; i < arr.length ; i++){

        if(fruta.includes(arr[i])){
            countFrutas++
        } else if(legume.includes(arr[i])){
            countLegumes++
        } else{
            countVerduras++
        }

    }
    console.log(`Existem ${countFrutas} frutas, ${countLegumes} legumes e ${countVerduras} verduras.`)
    return `Existem ${countFrutas} frutas, ${countLegumes} legumes e ${countVerduras} verduras.`

}

separarHortifrutis(hortifrutis)