// 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

// Correção
function calcularImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

function mostrarStatusImc(imc) {
    if(imc < 17) {
        console.log("Muito abaixo do peso");
    } else if(imc >= 17.0 && imc <= 18.49) {
        console.log("Abaixo do peso");
    } else if(imc  >= 18.5 && imc <= 24.99) {
        console.log("Peso normal")
    } else if(imc >= 25.0 && imc <= 29.99) {
        console.log("Acima do peso");
    } else if(imc >= 30.0 && imc <= 34.99) {
        console.log("Obesidade grau I");
    } else if (imc >= 35.0 && imc <= 39.99) {
        console.log("Obesidade grau II");
    } else if(imc >= 40.0) {
        console.log("Obesidade grau III");
    } 
}

let imcCalculado = calcularImc(55, 1.53);
console.log(`O IMC calculado é ${imcCalculado}`);
mostrarStatusImc(imcCalculado);

// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function porcentagem(i) {
    if(i >= 0 && i <= 1) {
        return `${(i * 100).toFixed(1)}%` ;
    } else {
        return "Digite um número entre 0 e 1";
    }
}
let num = porcentagem(0.456);
console.log(num);


// Versão do professor

function porcentagem(i) {
    let porcentagem = i*100 + "%";
    return porcentagem;
}
let p = porcentagem(0.456);
console.log(p);

// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

function ehNegativo1(i) {
    return i < 0;
}
console.log(ehNegativo1(-4));

// 

function ehNegativo(i) {
    if(i < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(ehNegativo(-3));

// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contar(i) {
    for(let n = 1; n <= i; n++) {
        console.log(n);
    }
}
contar(10);


// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
let p1 = nomeCompleto("Rayssa", "Santana");
console.log(p1);
// console.log(nomeCompleto("Rayssa", "Santana"));


// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

// Correção
function calcularAreaCirculo(raio) {
    const PI = 3.14;
    let area = PI * raio * raio;
    return area // o valor dentro da variável é retornado
}
console.log(calcularAreaCirculo(8));


// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

// Correção
function mostrarNivel(area) {
    console.log(`Analisando círculo de área: ${area}`);
    if (area >= 1 && area <= 20) {
        console.log("Nível I");
    } else if(area >= 21 && area <= 40) {
        console.log("Nível II");
    } else {
        console.log("Nível inválido");
    }
}
let areaCirculo1 = calcularAreaCirculo(3);
mostrarNivel(areaCirculo1);

// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function palavraMin(palavra) {
    return (palavra.toLowerCase()); 
}
console.log(palavraMin("MaiúScuLA"))


// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

// Correção
function contarCaractere(palavra, caractere) {
    let ocorrencias = 0;

    for(let i = 0; i < palavra.length; i++) {
        if(palavra[i] === caractere) {
            ocorrencias++;
        }
    }

    return ocorrencias;
}
console.log(contarCaractere("BATATA", "A"));
console.log(contarCaractere("otorrinolaringologista", "o"));