// 1. Média de notas
let n1 = 5.0;
let n2 = 4.7;
let n3 = 6.5;
let media = (n1 + n2 + n3) / 3;

if(media >= 7.0) {
    console.log("Você está aprovado!");
} else if(media >= 5.0 && media < 7.0) {
    console.log("Você está de reforço!");
} else if(media < 5) {
    console.log("Você está reprovado!");
}

// 2. Tabela IMC
let peso = 40.0;
let altura = 1.53;
let imc = peso / (altura * altura);

if(imc <= 16.9) {
    console.log("Muito abaixo do peso");
} else if(imc >= 17.0 && imc <= 18.4) {
    console.log("Abaixo do peso");
} else if(imc  >= 18.5 && imc <= 24.9) {
    console.log("Peso normal")
} else if(imc >= 25.0 && imc <= 29.9) {
    console.log("Acima do peso");
} else if(imc >= 30.0 && imc <= 34.9) {
    console.log("Obesidade grau I");
} else if (imc >= 35.0 && imc <= 40.0) {
    console.log("Obesidade grau II");
} else if(imc > 40.0) {
    console.log("Obesidade grau III");
} 

// 3. Verificação A e B
let a = 166;
let b = 1166;

if(a > b) {
    console.log("A é maior");
} else if(a === b) {
    console.log("Os números são iguais");
} else {
    console.log("B é maior");
}

// 4. Ajuste de salário
let salario = 2500;
let quantidadeDependentes = 6;
// let aumento30 = salario + 

if(quantidadeDependentes === 0) {
    console.log("Seu salário é:", salario);
} else if(quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    console.log("Seu salário é:", salario = salario + (salario * 0.3));
} else if(quantidadeDependentes > 5) {
    console.log("Seu salário é:", salario = salario + (salario * 0.4));
}

// 5. Dias das semana
let dia = 8;

if(dia >= 2 && dia <= 6) {
    console.log("É um dia útil!");
} else if(dia === 1 || dia === 7) {
    console.log("É final de semana!");
} else {
    console.log("Não existe este dia da semana! Selecione um número de 1 a 7");
}

// 6. Ano bissexto
let ano = 2200;

if((ano % 4 === 0 && ano % 100 != 0) || (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0)) {
    console.log(ano, "é um ano bissexto!");
} else {
    console.log(ano, "não é um ano bissexto!");
}

// 7. Idade
let idade = 1;

if(idade < 0 || idade > 130) {
    console.log("Idade inválida, tente outra vez!");
} else {
    console.log("Idade válida");
}

// 8. Turno de aula
let turno = "V";

if(turno === "M") {
    console.log("Bom Dia!");
} else if(turno === "V") {
    console.log("Boa Tarde!");
} else if(turno === "N") {
    console.log("Boa Noite!");
} else {
    console.log("Digite a letra correspondente ao seu turno.")
}

