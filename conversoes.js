//conversao implicita: converte um tipo de dado em outro, ou seja converter numero em string e vice versa, por exemplo

const numero = 444;
//se tentar converter string que contenham letras vai ocorrer o erro NaN 
const numeroString = Number("444a");

console.log(numero === numeroString);

//pego o numero 444 converteu em string e comparou e o resultado é true
console.log(numero == numeroString);

//pego o numero, transformou em string e com a operacao(+) ele concatenou 2 strings, resultando em 444444 
console.log(numero + numeroString);

// conversao explicita: é utilizada 2 funções para a conversão sendo elas a Number() e a String().

console.log(numero + numeroString);

// pode ser feita a conversao na propria variavel fazendo isso const numeroString = NUmber("444");

//const numeroString = "444";


const telefone = 123456;

//também é possível usar o toString() como função para converter numero em string, como no java por exemplo.
console.log(telefone.toString());
