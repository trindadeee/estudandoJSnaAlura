//usado pra saber a quantidade de caracteres presente na string
const senha = "tutu12332d";
console.log(senha.length);

//o toLowerCase()serve pra transformar em letras minusculas toda a string
const cidade = "belo horizonte";
const cidadeMaiuscula = "BELO HORIZONTE";

const cidadeMinusculo = cidadeMaiuscula.toLowerCase();
console.log(cidade === cidadeMinusculo);

//lembrar que no js pra fazer comparacao usa o igual(=) 3 vezes (===)
if (cidade === cidadeMinusculo) {
    console.log("verdade");
} else {
    console.log("mentira");
}

const primeiroNUmero = 10;
const segundoNumero = 10;

console.log(primeiroNUmero === segundoNumero);

