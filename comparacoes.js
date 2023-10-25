// == significa comparacao implicita ou também comparacao de valor

//como foi dito ele compara o valor entao se a string "5" é o mesmo valor do number (5) entao da true, mas se em algum dos 2 estiver um valor 
//diferente entao da false por exemplo uma string "6"
const numero = 5;
const texto = "5";
const texto1 = "6";

console.log(numero == texto);

console.log(numero == texto1);

console.log(texto1 == texto);

// === significa comparacao explicita, no caso ele pega o valor das variaveis e compara o tipo e valor 

console.log(numero === texto);

// atualmente é boa prática usar os 3 iguais(===) e quando for realizada conversoes faze-la de modo explicita



