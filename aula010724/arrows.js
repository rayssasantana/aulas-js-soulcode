// Declaração de function
function soma(a, b) {
    return a + b;
}

let resultadoSoma = soma(10, 5);

// Arrow function => mais concisa
const somaArrow = (a, b) => a + b;

let resultadoArrow = somaArrow(5, 20);

// Arrow com corpo
const checarPar = (num) => {
    if(num % 2 === 0) {
        console.log(`O número ${num} é par.`);
        return true;
    } else {
        console.log(`O número ${num} é ímpar.`);
        return false;
    }
}

// Função chamando outra

const soma2 = (a, b) => a + b;
const testeFuncao = () => 2 * soma2(5, 9);

// Transformando em arrow
// Function
function comparaPalavras(palavra1, palavra2) {
    return palavra1 === palavra2
}

let comparacao = comparaPalavras("batata", "batato");
console.log(comparacao); 
//Arrow
const comparaPalavras = (palavra1, palavra2) => palavra1 === palavra2;
console.log(comparaPalavras("rayssa", "soulcode"));

// Exemplo: Converter a função abaixo em arrow
function extrairDigitosVerificadores(cpf) {
    const partesCpf = cpf.split("-");
    return partesCpf[1];
}

// Conversão
// Exemplo: Converter a função abaixo em arrow
const extrairDigitos = (cpf) => {
    const partesCpf = cpf.split("-");
    return partesCpf[1];
}
// Em uma linha
const extrairDigitos2 = (cpf) => cpf.split("-")[1];

// For Each -> executa uma função para cada elemento no array
const numeros = [1, 2, 3, 4, 5, 6, 7];

// Funcionamento similar ao do for-of
numeros.forEach((n) => {
    console.log(`o número é: ${n}`);
}); // vai ser executada em cada número

numeros.forEach((n, i) => { // ele espera um parâmetro e um índice
    // n = elemento no array
    // i = índice desse elemento
    console.log(`O elemento no índice ${i} é ${n}`);
});

// Exemplo: somar todos os números de um array (forEach)
let soma = 0;

// Quando a arrow tem apenas 1 parâmetro não é obrigatório os parênteses
// Se o corpo possui 1 linha, pode ser simplificado dessa forma:
numeros.forEach(numero => soma += numero);

console.log(soma);

// Exemplo: Converter a função em arrow, e o for em forEach

function repetir(palavra, numero) {
    let result = "";
    
    for (let c = 0; c < numero; c++) {
        result += palavra;
    }
    return result;
}


const rep = (palavra, numero) => {
    let resultado = "";

    // Nesse exemplo, a repetição não é baseada em array
    for(let i = 0; i < qt; i++) {
        resultado += palavra;
    }

    return resultado;
}

// Exemplo: Converter a função abaixo em arrow e o for em forEach
// function filtrarStrings(arr) {
//     let stringsFiltradas = [];

//     for(let str of arr) {
//         if(str.length > 5) {
//             stringsFiltradas.push(str);
//         }
//     }

//     return stringsFiltradas;
// }

const filtrarStrings = (arr) => {
    let stringsFiltradas = [];

    arr.forEach((str) => {
        if(str.length > 5) {
            stringsFiltradas.push(str);
        }
    });

    return stringsFiltradas;
} 








