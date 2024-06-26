// Strings = cadeias de caracteres

const nome = "Rayssa";
const sobrenome = 'Silva Santana'; 

// Interpolação de string
const nomeCompleto = `${nome} ${sobrenome}`; // grave

console.log(nomeCompleto);

// Formação de strings
let meuPet = "Chloe";
// Índices (até o espaço em branco)
// 0: "C" 
// 1: "h", 
// 2: "l", 
// 3: "o", 
// 4: "e"

let comida = "Batata assada"; // 0 até 12
// console.log(comida[0]); // B
// console.log(comida[1]); // a
// console.log(comida[3]); // t
// console.log(comida[4]); // a
// console.log(comida[5]); // t
// console.log(comida[6]); // espaço em branco
// console.log(comida[12]); // undefined: não existe essa posição na string

// Tamanho da string
// console.log(comida.length); // total de caracteres da string
// console.log(comida[comida.length - 1]); // último caractere da string

// Percorrendo a string caractere por caractere
for(let i = 0; i < comida.length; i++) { //  começa do 0 e roda enquanto o índice for menor que 13
    console.log(comida[i]); // Mostra um caractere por vez
}

// Funções de string
let palavra = "Java Script";
console.log(palavra.toLowerCase()); //Minúscula / não altera a string, gera uma nova
let palavraMin = palavra.toLowerCase(); // Guardo numa variável

console.log(palavra.toUpperCase()); // Maiúscula

console.log(palavra.charAt(0)); // igual a palvra[0]

console.log(palavra.replace("Java", "Type")); // 1- tirar 2- substituir // Type Script
console.log(palavra.replace("J", "R")); // Rava Script
console.log(palavra.replaceAll("a", "x")); // Jxvx Script

let frase = "Eu comi arroz, feijão, batata e brócolis";

console.log(frase.includes("batata"));

if(frase.includes("brócolis")) {
    console.log("Muito bem!");
} else(console.log("Coma algo saudável"));

let arquivo = "musica.mp3";

console.log(arquivo.endsWith("mp3")); // verifica se termina com 'mp3'
console.log(arquivo.endsWith("mp4"));
console.log(arquivo.startsWith("mus"));

// Slice
console.log(arquivo.slice(0, 3)); // Recorta a string do indice 0 ao 3
console.log(arquivo.slice(4, 6));