// Map = cria um novo array com os resultados da função aplicada em cada elemento
const numeros = [3, 4, 9, 10];
const quadrados = numeros.map((n) => n**2); // percorre o array e em cada elemento e aplica a função, gerando um array novo.
console.log(quadrados);

//

const nomes = ["josé", "maria", "joão", "camila"];
// nome = valor de cada elemento
// i = índice desse elemento (se quiser utilizar o índice)
const nomesMaiusculo = nomes.map((nome, i) => nome.toUpperCase());
const nomeExclamacao = nomes.map((nome, i) => nome + "!");

console.log(nomes);
console.log(nomesMaiusculo);
console.log(nomeExclamacao);

// Exemplo: Use map para transformar os valores do array abaixo.

const valores = [1, 2, 3, 4, 5, 6, 7];

// valores.map((valor) => {
//     // Se o número for par faz número * 2, se for ímpar faz número / 2
// });

const novosValores = valores.map((valor) => {
    if(valor % 2 == 0) {
        return valor * 2;
    } else {
        return valor / 2;
    }
});

console.log(novosValores);