// 1. Faça a tabuada completa utilizando o loop for.

for(nTab = 1; nTab <= 10; nTab++) {
    console.log("-----------------");
    console.log(` TABUADA DO ${nTab}`);
    console.log("-----------------");
    for(let mult = 1; mult <= 10; mult++) {
        console.log(`${nTab} x ${mult} = ${nTab*mult}`);
    }
}

// 2. Use um laço for para imprimir na tela a série de Fibonacci até o décimo termo.

let termoAnterior = 0; // 1
let termoAtual = 1; // 1

for(let c = 0; c < 10; c++) {
    let proximoTermo = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
    console.log(termoAnterior);
}

// 3. Use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).

for(let c = 10; c >= 1; c--) {
    console.log(c);
}

// 4. Faça um programa que calcule o fatorial de um número inteiro.
// 5! = 5 x 4 x 3 x 2 x 1 = 120
// 0! = 1 e 1! = 1

let fat = 5;
let mult = 1;

for(let c = fat; c >= 1; c--) {
    mult *= c;
}
console.log(mult);

// 5. Programa múltiplos de 7

for(let c = 1; c <= 100; c++) {
    if(c % 7 === 0) {
        console.log(c);
    }
}

// 6. Mostre a soma do 50 até o número 100 usando loop for.

let soma = 0;
for(let c = 50; c <= 100; c++) {
    soma += c;
}
console.log(`A soma dos números de 50 a 100 é: ${soma}`);

// 7.Mostre a seguinte figura com utilização de laços:
// *
// **
// ***
// ****
// *****

let linha = "";
let altura = 5;

for(let c = 0; c < altura; c++) {
    linha += "*";
    console.log(linha);
}