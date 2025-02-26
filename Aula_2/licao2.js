/*
//Lição 1
let recebeNome = function(a, b){
    return a + " " + b ;
};

console.log(recebeNome("Fabio","Colombini"))
*/
//Lição 2
/*
let calculaAreaRetangulo = (a, b) => a * b;

console.log(calculaAreaRetangulo(2,5));
*/
//Lição 3
/*
let array = [10, 20, 30, 40, 50];

let somaArray= function(arr){
    let soma = 0; 
    for (let i = 0; i < arr.length; i++) { 
        soma += arr[i]; 
    }
    return soma;
}


console.log(somaArray(array));
*/
//Lição 4
/*
let array = [1,2,3,4,5,6,7,8,9,10];


let imparArray = function(imp){
    let impar = []
    for (let i = 0; i < imp.length; i++) {
        if (imp[i] % 2 !== 0){
            impar.push(imp[i]);
        }
    }
    return impar;
}

console.log(imparArray(array));
*/
//Lição 5
/*
let cidades = ["Sorocaba","Piedade","Votorantim"];

cidades.unshift("São paulo");
cidades.pop();

console.log(cidades);
*/
//lição 6
/*
const aluno ={
    nome: 'Fabio',
    idade: 20,
    curso: 'Engenharia',
    matricula: 'Confirmado'


}

console.log(aluno.nome,"/",aluno.idade,"/",aluno.curso,"/",aluno.matricula);
*/
//licao 7
/*
let array = [1,2,3,4,5,6,7,8,9,10];


let encontrarMaior = function(num){
    let maior = num[0];

    for (let i = 1; i < num.length; i++) {
        if (num[i] > maior){
            maior = num[i];
        }
    }
    return maior;
}


console.log(encontrarMaior(array));

*/
//licao 8
/*
const produto ={
    "nome": "Leite",
    "preco": 5,
    "quantidade": 2,

    cacularTotal : function(){

    return this.preco * this.quantidade;
    }

};


console.log(produto.cacularTotal())

*/
//licao 9
/*
const endereco = {
    rua: "Avenida Brasil",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo"
};


for (let chave in endereco) {
    console.log(chave + ": " + endereco[chave]);
}
*/
//Licao 10
const alunos = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 19 },
    { nome: "Carlos", idade: 21 },
    { nome: "Daniela", idade: 16 }
];

function alunosMaior(lista) {
    let maiores = []; 

    for (let i = 0; i < lista.length; i++) { 
        if (lista[i].idade > 18) { 
            maiores.push(lista[i]); 
        }
    }
    return maiores;
}

console.log(alunosMaior(alunos));
