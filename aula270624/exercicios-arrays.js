// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.

// É preciso já ter os arrays em exercícios assim

function listarAusentes(alunos, lista) {
    let ausentes = [];

    for(let nome of alunos) {
        if(lista.includes(nome)) {
            console.log(`O aluno ${nome} está presente.`);
        } else {
            console.log(`O aluno ${nome} está ausente.`);
            ausentes.push(nome);
        }
    }

    return ausentes;
}

let turma = ["Rayssa Santana", "Beatriz Faina", "Julia Domingues", "Raul Costa", "Gabriel Eleutério"];
let presenca = ["Rayssa Santana", "Beatriz Faina", "Julia Domingues"];

let faltas = listarAusentes(turma, presenca);
console.log(faltas);

// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.

function elevaAoQuadrado(listaNumeros) {
    let quadrados = [];
    for(let c = 0; c < listaNumeros.length; c++) {
        let quadrado = listaNumeros[c] ** 2;
        quadrados.push(quadrado);
    }
    return quadrados;
}
let list = elevaAoQuadrado([2, 4, 6, 5, 7, 8, 9]);
console.log(list);

// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

function filtrarArquivos(arquivos, ext) {
    let filtrados = [];

    for(let nome of arquivos) {
        if(nome.endsWith(ext)) {
            filtrados.push(nome);
        }
    }

    return filtrados;
}

let arquivosPasta = ["codigo.js", "estilos.css", "index.html", "sobre.html"];
let extensao = ".html";
let arquivosHtml = filtrarArquivos(arquivosPasta, extensao);
console.log(`Arquivos da extensão ${extensao}: ${arquivosHtml}`);

// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

let listNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("For-of:");
for(let n of listNum) {
    console.log(n);
}

console.log("For comum:");
for (let c = 0; c < listNum.length; c++) {
    console.log(listNum[c]);
}

// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.

function maiorCinco(lista1) {
    let result= [];
    for (let c = 0; c < lista1.length; c++) {
        if(lista1[c].length > 5) {
            result.push(lista1[c]);
        }
    }
    return result;
}

console.log(maiorCinco(["abacaxi", "limão", "abacate", "banana", "melancia", "maçã"]));

// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.

let lista = [1, 34, 65, 23, 2.5, 99, 80];
let maior = lista[0]; // suponho que o primeiro é o maior
for(let i = 1; i < lista.length; i++) { // comparo a partir do segundo (let i = 1)
    if(lista[i] > maior) { // o número do indice 1 é maior que o 0? Sim!
        maior = lista[i]; // então troca
    }
}

console.log(maior);


// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.
function extraiVerificadores(cpf) {
    let cpfArray = cpf.split("-");  
    return cpfArray[1];
}

let digitos = extraiVerificadores("546.948.957-20");
console.log(digitos);

//

function extraiVerificadores(cpf) {
    return cpf.slice(-2);
}

let dig = extraiVerificadores("546.948.957-20");
console.log(dig);


// 8. Crie uma função que inverte uma string. Retorna ela invertida.

function invertePalavra(palavra) {
    let palavraInvertida = palavra.split("").reverse().join("");
    return palavraInvertida;
}

console.log(invertePalavra("arroz"));

//

function invertePalavra(palavra) {
    return palavra.split("").reverse().join("");
}

console.log(invertePalavra("arroz"));


// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.

function repetir(palavra, numero) {
    let result = "";
    for (let c = 0; c < numero; c++) {
        result += palavra;
    }
    return result;
}

console.log(repetir("bala", 3));

// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.
function comparaPalavras(palavra1, palavra2) {
    return palavra1 === palavra2
}

let comparacao = comparaPalavras("batata", "batato");
console.log(comparacao); 

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'

function formataData(listData, separador) {
    let = [dia, mes, ano] = listData;
    return `${dia}${separador}${mes}${separador}${ano}`;
}
let data = ["27","06","2024"];
let separador = "/";
console.log(formataData(data, separador));

//

let dataArray = ["27","06","2024"]

function formatarData(arr, sep) {
    return arr.join(sep);
}

console.log(formatarData(dataArray, "/"));

// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'

function busca(array, elemento, valorPadrao) {
    if(array.includes(elemento)) {
        return elemento;
    } else { // não precisaria ter o else, porque se passar do if ele retorna, parando a execução (else implícito)
        return valorPadrao;
    }
}

let array = ["alface", "pimenta", "maionese", "ovo"];
console.log(busca(array, "batata", "Não tem batata :("));
console.log(busca(array, "pimenta", "Não tem pimenta :("));