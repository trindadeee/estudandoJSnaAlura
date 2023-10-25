const idadeMinima = 18;
const idadeCliente = 16;

if(idadeCliente >= idadeMinima){
    console.log("coca-cola");
} else{
    console.log("suquinho");
}

//operador ternario, é chamado assim por ter tres operadores numa linha de codigo
//nao é recomendado coloca varios operadores ternarios dentro do outro pois fica dificil a leitura e compreensao, nesse caso usar o if.
//é uma boa prática
console.log(idadeCliente >= idadeMinima ? "coca-cola" : "suquinho");

//caso o numero e string sejam diferentes da true, se iguais da false, ou seja ele compara apenas o valor, ou seja valores distintos true, 
//valores iguais false
let num = 4;
let texto = "4";
console.log(num != texto);

//caso o valor e o tipo sejam iguais da false, mas se forem diferentes da true
let num1 = 5;
let texto1 = "5";
console.log(num1 !== texto1);

//---------------------------------------------------------

const nome = "lia";
const idade = 20;
const bebidaMaior = "coca-cola";
const bebidaMenor= "suco";

// aqui eu uni operador ternario com template string!
//é possivel utilizar aspas simples e duplas dentro da crase e nao altera o resultado, mas aparece no console as aspas simples ou duplas que 
//foi posto no texto, lembrar como se fosse uma pessoa falando em uma historia que a fala do personagem é em aspas duplas
const pedido = `${nome} fala: "por gentileza, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`;

console.log(pedido);

if (idade >= 18) {
    console.log(`${nome} diz: "por favor, quero beber" ` + bebidaMaior);
} else {
    
}
