let nums = [];
console.log(nums);

// Adicionar elementos ao final do array
nums.push(4); 
nums.push(5);
nums.push(10, 11, 20, 30);
console.log(nums);
nums.push(100);
console.log(nums);

// Removendo elemento o último elemento
nums.pop();
nums.pop();
console.log(nums);

// Inserir no início
let notas = [6.5, 7.0, 8.9, 9];
console.log(notas);
notas.unshift(8.0);
console.log(notas);

// Remover do início
notas.shift();
console.log(notas);

// Juntar o array e montar uma string
let enderecoIp = [192, 168, 294, 1];
console.log(enderecoIp.join(".")); // saída: 192.168.294.1

let data = ["27", "06", "2024"];
let dataString = data.join("/");
console.log(dataString);

// Concatenar arrays - combina os dois arrays criando um novo
let p1 = ["Mouse", "Monitor", "Microfone"];
let p2 = ["Webcam", "Teclado"];

let p3 = p1.concat(p2);
console.log(p3); // saída: 'Mouse', 'Monitor', 'Microfone', 'Webcam', 'Teclado'

// Array reverso
let n =[1, 2, 3]; 
let nInvertido = n.reverse(); // gera um novo array
console.log(nInvertido);

// Includes = confirma se existe ou não no array
let pessoas = ["joão", "josé", "maria"];

if(pessoas.includes("josé")) {
    console.log("josé está presente");
} else {
    console.log("josé não está presente");
}

// Split  = quebra string em um array
let frase = "Eu vou estudar React";
let dataInicio = "26/06/2024";
let palavraEspacial = "BATATA";

let fraseArray = frase.split(" "); 
console.log(fraseArray); // saída: [ 'Eu', 'vou', 'estudar', 'React' ]

let dataInicioArray = dataInicio.split("/");
console.log(dataInicioArray); // saída: [ '26', '06', '2024' ]

// Inverter string
console.log(palavraEspacial.split("").reverse().join("")); // saída: ATATAB

// indexOf - retornar o índice de um elemento
let figuras = ["coração", "estrela", "ok", "não", "joinha", "sorriso"];
console.log(figuras.indexOf("ok"));
console.log(figuras.indexOf("joinha"));
console.log(figuras.indexOf("batata")); // Saída: -1 = não existe o elemento no array

// Slice - recorta uma parte gerando um novo array

let fig1 = figuras.slice(2,5); 
console.log(fig1); // saída: [ 'ok', 'não', 'joinha' ]

let fig2 = figuras.slice(4);
console.log(fig2); // [ 'joinha', 'sorriso' ]

let fig3 = figuras.slice(2, figuras.length);
console.log(fig3); // 

// Ultimo elemento
console.log(figuras.slice(-1)); // [ 'sorriso' ] - criou outro array
console.log(figuras[figuras.length -1]); // sorriso