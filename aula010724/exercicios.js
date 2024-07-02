// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.
const maiorNumero = (n1, n2) => {
    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(maiorNumero(54, 32));

// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.
const palavras = ["rayssa", "évila", "chloe", "jeovanna"];

palavras.forEach((palavra) => {  
    const primeiraMaiuscula = palavra[0].toUpperCase() + palavra.slice(1);
    console.log(primeiraMaiuscula);
});


// 3. Use map para transformar um array de números, multiplicando cada número por 5.
const numeros = [2, 4, 5, 7, 8];

const multiplicaNumeros = numeros.map((num) => num * 5);
console.log(multiplicaNumeros);


// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.
const idades = [14, 21, 34, 7, 20, 18];

const idadesMaior18 = idades.filter((idade) => idade >= 18);
console.log(idadesMaior18);

// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.
let livro = {
    titulo: "Água viva",
    autor: "Clarice Lispector",
    publicacao: {
        editora: "Rocco",
        ano: "2020",
    }
}

console.log(livro.publicacao.editora);

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.
const [fruta1, fruta2] = ["maçã", "banana", "manga", "abacaxi"];
console.log(fruta1);
console.log(fruta2);

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.

// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

// function numerosPares(array) {
//     let pares = [];
//     for(let numero of array) {
//        if (numero % 2 === 0) {
//         pares.push(numero);
//        }
//     }
//     return pares;
// }

// console.log(numerosPares([12, 23, 34, 55, 60, 81]));
// console.log(numerosPares([1, 23, 4, 52, 61, 100]));

// arrow + filter

const numerosPares = (array) => array.filter(numero => numero % 2 === 0);
console.log(numerosPares([1, 2, 3, 4, 5, 6, 7,]));


