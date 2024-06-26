/*
    Funções

    function nome_da_funcao(parametros) {
        // bloco de código da função
    }
*/

// Declarando uma função chamada "boasVindas"
function boasVindas() { // Escopo da função
    console.log("Sejam bem-vindes!");
    console.log("!!!!!!!!!!");
}

// Chamada da função
// boasVindas();

//////////////////////////////////////////////

function exemplo() {
    let a = 5;
    let b = 10;

    console.log(`A soma é ${a + b}`);
}

// Escopo global
let num1 = 2;
let num2 = 5;

// o que NÃO fazer
function exemplo1() {
    console.log(`A soma é ${num1 + num2}`);
}

exemplo1();
num1 = 3;
num2 = 6;
exemplo1();
/////////////////////////////////////////////

// Parâmetros = entrada: o que é necessário para executar
function soma(a, b) {
    console.log(`A soma de ${a} e ${b} é ${a+b}`);
}

soma(10, 23);

///////////////////////////////////////////////
function media(n1, n2, n3) {
    let resultado = (n1 + n2 + n3 / 3);
    console.log(`A média é ${resultado}`);

    // Retorno = saída da função
    return resultado;
}

let mediaAluno1 = media(7.0, 6.0, 9.0);
let mediaAluno2 = media(8.0, 10.0, 6.0);
let mediaAluno3 = media(4.0, 5.0, 7.0);

console.log("Valores retornados: ");
console.log(mediaAluno1);
console.log(mediaAluno2);
console.log(mediaAluno3);

////////////////////////////////////////////////

function calcularImc(peso, altura) {
    return peso / (altura*altura); // posso criar uma variável como resultado dessa conta para aplicar o ".toFixed"
}

let pessoa1 = calcularImc(50, 1.50);
console.log(pessoa1);