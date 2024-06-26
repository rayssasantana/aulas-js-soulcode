// 1. Escreva um programa que inverte uma string
// percorrer os índices de tras pra frente
let palavra = "Inverter";
let invertida = "";

for(let i = palavra.length -1; i >= 0; i--) { // palavra.length -1 = último índice
    invertida += palavra[i];
}
console.log(invertida);

// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
let frase = "Alguma palavra dessa frase será censurada";
let fraseCensurada = frase.replace("palavra", "###");

console.log(fraseCensurada);

// 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com // soulcodeacademy.org
let email = "rayssa@soulcodeacademy.org";

if(email.endsWith("soulcode.com") || email.endsWith("soulcodeacademy.org")) {
    console.log("O e-mail pertence ao domínio da Soulcode");
} else {
    console.log("O e-mail não pertence ao domínio da Soulcode");
}
