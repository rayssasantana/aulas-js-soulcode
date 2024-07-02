// Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
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

// Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
const ofuscarEmail = (email) => {
    const partes = email.split("@");
    // Forma extensa
    // const usuario = partes[0];
    // const dominio = partes[1];
    // Desestruturação do array
    // O valor do índice 0 é armazenado na variável "usuário"
    //  O valor do índice 1 é armazenado na variável "dominio"
    const [ usuario, dominio ] = email.split("@");

    return usuario[0] + "*****" + "@" + dominio;
}

console.log(ofuscarEmail("rayssa@email.com"));

// Exemplo de desestruturação de arrays. Funciona na ordem
const [nome1, nome2] = ["Rayssa", "Évila", "Maria"];
console.log(nome1);
console.log(nome2);

// Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.
function contarCaracteres(str) {
    const contagem = {}; // não sei quantos vou precisar

    for(let caractere of str) {
        contagem[caractere] = 0;
    }

    for(let caractere of str) {
        contagem[caractere]++;
    }

    console.log(contagem);
}

contarCaracteres("hipopotamo");


// Resolução Leonardo

function contarCaracteres(str) {
    const contagem = {};
    // para (for) cada letra da (of) string, verifica (if) se já existe no objeto contagem
    for (let letra of str) {
        if (contagem[letra]) {
            contagem[letra]++;
        } else {
            contagem[letra] = 1;
        }
    }
    // no else, contagem sempre em 1 por assumir que sempre terá 1 letra encontrada

    return contagem;
}

console.log(contarCaracteres('bananaz'));


// Resolução Wesley
function contarFrequencia(str) {
    let frequencia = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (frequencia[char]) {
        frequencia[char]++;
      } else {
        frequencia[char] = 1;
      }
    }
    return frequencia;
  }
  
  let resultado = contarFrequencia("ola wesley");
  console.log(resultado);