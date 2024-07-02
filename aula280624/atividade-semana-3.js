// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.

function numerosPares(array) {
    let pares = [];
    for(let numero of array) {
       if (numero % 2 === 0) {
        pares.push(numero);
       }
    }
    return pares;
}

console.log(numerosPares([12, 23, 34, 55, 60, 81]));
console.log(numerosPares([1, 23, 4, 52, 61, 100]));

/*
Criei um array vazio "pares" para armazenar os números pares. No loop, verifiquei se o número atual é par (resto da divisão por 2 igual a zero) e, se for, é adicionado ao array "pares". Ao final, "pares" retorna os números pares do array.
*/

// Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.

function somaNumero(array) {
    let soma = 0;
    for(let n of array) {
        soma += n;
    }
    return soma;
}

console.log(somaNumero([5, 28, 44, 564, 69]));
console.log(somaNumero([56, 248]));

/*
Criei a variável "soma" inicializada com 0. O loop percorre o array, somando cada número à variável "soma". Ao final, "soma" contém a soma de todos os números do array.
*/


// Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.

function ehPalindromo(palavra) {
    let palavraInvertida = palavra.split("").reverse().join("");
    if (palavraInvertida.toLowerCase() === palavra.toLowerCase()) {
        return `${palavra} é um palíndromo`;
    } else {
        return `${palavra} não é um palíndromo`;
    }
}
console.log(ehPalindromo("socorrammesubinoonibusemmarrocos"));
console.log(ehPalindromo("Arara"));
console.log(ehPalindromo("girafa"));

/*
Criei uma variável para armazenar a palavra invertida (usando split para separar as letras, reverse para inverter a ordem e join para juntar as letras novamente). Em seguida, comparei a palavra invertida com a original, retornando uma mensagem diferente para cada situação.
*/

// Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.

// resolução:
function contagemVogais(palavra) {
    const vogais = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "â", "ê", "ô","à"];
    let contagem = 0;
    const palavraLower = palavra.toLowerCase();

    for(let letra of palavraLower) {
        if(vogais.includes(letra)) {
            contagem++;
        }
    }

    return contagem;
}

console.log(contagemVogais("amorá"));

// Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.

function menorNumero(array) {
    let menor = array[0];
    for (let n = 1; n < array.length; n++) {
        if(array[n] < menor) {
            menor = array[n];
        }
    }
    return menor;
}
console.log(menorNumero([-19, 26, -67, 8, 34, 56, 0]));
console.log(menorNumero([-19, -26, -7, -8, -34]));

/*
Criei a variável "menor" supondo que o menor número está no índice zero. O loop percorre o array a partir do segundo elemento e, se encontrar um número menor, atualiza "menor". Ao final do loop, "menor" contém o menor número do array.
*/

// Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3

function media(array) {
    let somaMedia = 0;
    for(let n of array) {
        somaMedia += n;
    }
    return (somaMedia / array.length).toFixed(1);
}

console.log(media([7.0, 4.5, 5.5, 8.0, 9.0]));
console.log(media([6.0, 9.5, 10.0, 4.0]));

/*
A variável "somaMedia" inicia com 0. O loop percorre o array, somando os números. Após o loop, a soma é dividida pelo comprimento do array, gerando a média, que a função retorna.
*/

// Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.

// Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
