// Objetos = servem para estruturar dados
/*
    let variavel = { 
        propriedade1: valor1,
        propriedade2: valor2,
        propriedade3: valor3
    }
*/

// nome, idade, peso, altura
let pessoa1 = {
    nome: "Rayssa",
    idade: 25,
    peso: 53.2,
    altura: 1.53
};

let pessoa2 = {
    nome: "Évila",
    idade: 25,
    peso: 50,
    altura: 1.54
};

// Acessando de propriedade
console.log(pessoa1.nome);
console.log(pessoa2.idade);
console.log(pessoa1["peso"]);
console.log(pessoa1.email);

// Adicionando propriedades ao objeto
pessoa1["email"] = "rayssa@email.com";
console.log(pessoa1);

// Alterando valores nas propriedades
pessoa1.idade = 40;
pessoa2["idade"] += 5; // acrescenta mais 5 na idade atual

console.log(pessoa1.idade);
console.log(pessoa2.idade);
console.log("Pessoa 2: ",pessoa2);

// Removendo propriedades
delete pessoa1.idade; // ["idade"];
console.log("Pessoa 1: ",pessoa1);

// No dia a dia a gente não cria os objetos, a gente se preocupa em manipular as propriedades
const dado = JSON.stringify(pessoa2);
console.log(JSON.parse(dado));
