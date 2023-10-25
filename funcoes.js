let x = "";
console.log(x);
x = "oi";

function imprimirTexto(texto){
    console.log(texto);
}

imprimirTexto("ola");
imprimirTexto(somaSemParametros());
// imprimirTexto(somaComParametros());// ao chamar uma funcao com parametros em uma funcao que tem parametros pode ocorrer erros como NaN ou undefined


//esta sendo executada mas nao me traz nenhuma resposta
function somaSemParametros(){
    const numero1 = 2;
    const numero2 = 3;
    return numero1 + numero2;
    //pode ser feito assim ou:
    //return 2 + 3; e chamar a funcao com o consolo.log da mesma forma
    
}

console.log(somaSemParametros());

function somaComParametros(num1, num2){
    console.log(num1 + num2); // tambem nao vi diferença colocando o return com o log
    //return console.log(num1 + num2);
}

somaComParametros(10, 15);

