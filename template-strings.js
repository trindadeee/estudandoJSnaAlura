const nome = "Arthur";
const idade = 2023-2002;
const cidadeNascimento = "Campina Grande"
//const apresentacao = "Meu nome é " + nome + ", nasci no ano de 2002 e tenho 21 anos de idade " + idade + ", na cidade de Campina Grande Paraíba" + cidadeNascimento

//template string é usado pra ao inves de fica concatenando varias strings coloca o simbolo de dolar($) com o operador chaves {} so que ao invez
//de escrever com aspas duplas("") usa o crase que é o acento agudo ao contrario (`) pra abrir e fechar a string
//existem 3 formas de escrever texto em js: aspas simples(''), aspas duplas("") e com o crase(`).
//apenas funciona dessa forma com a crase(`) com aspas duplas e simples nao funciona.
const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidadeNascimento}`;


//const apresentacao1 = 'Meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidadeNascimento}';
//console.log(apresentacao1);


console.log(apresentacao);
// ou:
//console.log(apresentacao + nome);