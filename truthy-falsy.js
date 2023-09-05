// ao usar os 2 iguais(==) faz uma comparacao de valor. ja os 3 iguais(===) compara o valor e tipo.
console.log(0 == false);

// o js considera como "false" strings vazias 
console.log("" == false);

// o numero 1 o js considera o valor dele como true.
console.log(1 == true);

// null != undefined. O null é quando tem um dado com valor vazio, já o undefined o dado não recebe valor algum, ou seja a variavel nao é iniciada na aplicacao  

// Undefined mas ela pode ser usada depois na aplicacao e o espaço da variavel fica armazenado na memoria
let meuDado;

// A variavel tem um valor vazio
let meuDadoNull = null;

console.log(meuDado);
console.log(meuDadoNull);

let numero = 3;
let string = "oi";

//o typeof serve pra perguntar ao js qual o tipo de dado que esta guardado nessa variavel
console.log(typeof numero);
console.log(typeof string);

console.log(typeof meuDado);

//ao ser criado a variavel com valor null, foi criado como objeto e nao como null e isto é um bug do js
console.log(typeof meuDadoNull);