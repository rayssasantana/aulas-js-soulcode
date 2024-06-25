// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.

let numero = 2;

while(numero <= 10) {
    console.log(numero);
    numero += 2;
}

// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).

let num1 = 7;
let num2 = 1;
let result;

while(num2 <= 10) {
    result = num1*num2;
    console.log(num1, "x", num2, "=", result);
    num2++;
}

// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

let cont = 1;
let soma = 0;

while(cont <= 999) {
    if(cont % 2 !== 0) {
        soma += cont;
    }
    cont++;
}

console.log("Soma dos números ímpares:", soma);

// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9 (numero % 9 === 0), mostre o número e ao final exiba o total de números divisíveis por 9.

let cont1 = 1;
let qt = 0;

while(cont1 <= 1000) {
    if(cont1 % 9 === 0) {
        console.log(cont1, "é divisível por 9.");
        qt++;
    }
    cont1++
}

console.log("Total:", qt);