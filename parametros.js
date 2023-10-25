function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(10, 20));


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e tenho ${idade} anos de idade`;
}

console.log(nomeIdade(21, "arthur"));

//caso o usuario esquece de por um parametro ocorre o erro NaN, mas para evitar isto é possivel coloca argumentos no proprio argumento do 
//parametro como visto abaixo. Isto serve para que se o usuario nao coloca algum parametro pra nao ocorrer erro ele substitui por 1 e funciona
function multiplicar(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplicar(soma(2, 0), soma(3, 1)));
//console.log(multiplicar(soma(2, 0))); traz o resultado 2 pois defini no argumento que caso nao receba algum dos parametros substituisse por 1
