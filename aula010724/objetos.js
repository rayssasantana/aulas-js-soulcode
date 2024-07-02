// Objetos = são estruturas para representar dados
let pessoa = {
    nome: "Rayssa Santana",
    cpf: "000.000.000.-00",
    dataNascimento: "22/09/1998",
    contato: { // objeto aninhado
        email: "rayssa@email.com",
        telefone: "(11) 9-9999-9999",
        fax: "+9 999 999 9999"
    },
    endereco: {
        cidade: "São Paulo",
        estado: "SP",
        cep: "00000-000",
        rua: "Rua x",
        numero: "000"
    },
    objetivosProfissionais: ["Home-office", "Desenvolvedor Senior", "Exterior"],
    formacao : [
        { nome: "Ensino médio", período: "2000-2003" }, // 0
        { nome: "Técnico em informática", período: 2003-2005 }, // 1
        { nome: "Bacharelado em computação", período: "2005-2010" } // 2
    ]
}

// console.log(pessoa.contato);
// console.log(pessoa.contato.email);
// console.log(pessoa.endereco);
// console.log(pessoa.endereco.cidade);
// console.log(pessoa.objetivosProfissionais);
// pessoa.objetivosProfissionais.push("Dólar");
// pessoa.objetivosProfissionais.forEach((objetivo) => console.log(objetivo));
pessoa.formacao.push({ nome: "Mestrado em IA", período: "2010-2012" });
for(let f of pessoa.formacao) {
    console.log("Formação: ", f.nome);
    console.log("Período: ", f.periodo);
}

// Crie um objeto para representar um aluno:
    // nome
    // serie
    // materias (nome da materia, nome do professor)
    // notas 

let aluno = {
    nome: "Camila Alba",
    serie: "9 ano",
    materias: [
        { nome: "Língua Portuguesa", professor: "Amanda" },
        { nome: "Matemática", professor: "Marcela" },
        { nome: "Ed. Física", professor: "Carla" },
    ],
    notas: [7.0, 8.5, 5.0]
}
