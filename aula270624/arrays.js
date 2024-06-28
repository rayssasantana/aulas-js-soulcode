// Array = permite armazenar múltiplos valores/itens/elementos
// 
// [1, 2, 3, 4, 5] - preenchido
// [batata, 1, true, batata doce] - com strings e números

let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras); //  Ver elementos dentro do array

let numeros = [1, 2.4, 3, 4,6, 7];
console.log(numeros);

// Acessando um elemento
console.log(figuras[1]); // saída: "estrela"
console.log(numeros[3]); // saída: "4"
console.log(numeros[7]); // saída: "undefined"
console.log(numeros.length); // saída: "6"

// Alterar os elementos
let notas = [6.5, 8.0, 9.0];
console.log(`Antes: ${notas}`);
notas[1] = 8.5; // altera diretamente o valor, não cria uma cópia // SUBSTITUI
notas[2] += 0.5; // ALTERA
notas[0]++; // Soma um / notas[0] = notas[0] + 1 // INCREMENTO
console.log(`Depois: ${notas}`);

let p = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
p[2] = "Ok";
console.log(p);

// Tamanho (length)
let arr1 = [];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length);
console.log(arr2.length); // percorrer um array

// Percorrer array
for(let i = 0; i < arr2.length; i++) {
    console.log(i); // console.log(arr2[i]); - mostrar os valores
}

let alunos = ["Alberto", "Ana", "Bea", "Caio"];
for (let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${i} é ${alunos[i]}`);
}

// For-of // Percorre todos os elementos, e "f" assume cada um dos valores por vez
let frutas = ["abacaxi", "laranja", "banana", "abacate"];

for (let f of frutas) { 
    console.log(f); // elemento
}

// For in
for(let i in frutas) {
    console.log([i]); // percorre os índices
}
