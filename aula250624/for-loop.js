/*
    for (inicializacao; condicao; atualizacao) {
        // condigo que será repetido
    }
*/

for(let cont = 0; cont < 10; cont++) { 
    console.log(cont);
} // após executar o bloco, ele faz a atualização cont++

// For = Quando você sabe de antemão quantas vezes o loop deve ser executado
// While =  Quando o número de iterações não é conhecido de antemão

// 0 até 100, pulando de 5 em 5
for(let cont = 0; cont <= 100; cont += 5) {
    console.log(cont);
}

// 100 até 0, pulando de 5 em 5
for(let cont = 100; cont >= 0; cont -= 5) {
    console.log(cont);
}

// Adaptar os exercícios

// 1. Imprimir na tela todos os números pares de 2 a 10.
for(let c = 2; c <= 10; c += 2) {
    console.log(c);
}

// 2.
let n = 7;
for(let c = 1; c <= 10; c++) {
    console.log(`${n} x ${c} = ${n*c}`);
}

// 3.
let soma = 0;
for(let c = 1; c <= 999; c++) {
    if(c % 2 !== 0) {
        soma = soma + c;
    }
}
// Interpolação / Template string
console.log(`Soma dos ímpares: ${soma}`);

// 4.
let qt = 0;

for(let c = 1; c <= 1000; c++) {
    if(c % 9 === 0) {
        console.log(`${c} é divisível por 9`);
        qt++;
    }
}

console.log(`Total: ${qt}`);