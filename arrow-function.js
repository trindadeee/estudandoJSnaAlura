//novidade que veio no ES6:

const apresentarArrow = nome => `meu nome é ${nome}`;

console.log(apresentarArrow('arthur'));

const soma = (num1, num2) => num1 + num2;

console.log(soma(20, 50));

//arrow funtion;
//nao pode se nomeada;
//sempre vem com a const e nome de variavel no caso const soma;
//se tiver mais de uma linha de codigo é necessario usar o return com as chaves, se tiver apenas 1 linha de codigo nao é necessario;

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10){return "somente numeros de 1 a 9"}
    else{return num1 + num2}
}

console.log(somaNumerosPequenos(1, 8));