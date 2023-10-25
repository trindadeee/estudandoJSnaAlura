//existe formas distintas de declarar funcoes:

//declaracao de funcao

function minhaFuncao(parm){
    //aqui fica o codigo
}

minhaFuncao("parm");

//expressao de funcao

//diferencas entre elas e ainda tem uma principal que esta mais abaixo: 
//nao tem um nome a funcao, criou a variavel const e atribuiu à variavel a funcao;
//é importante ser const pra nao coloca um valor de variavel igual ficando a funcao sem ser chamada, tipo usar o mesmo nome de variavel
//esses tipos de funcao nao tem um nome, nome que tem é a variavel soma e chama a funcao pela nome da variavel que foi usado ao criar o const

const soma = function(num1, num2){return num1 + num2};

console.log(soma(10, 5));

// existem diferenca entre essas formas de declarar funcao. nao sao a mesma coisa


//principal diferença: 

//a declarativa é possivel chamar a funcao antes da execucao que funciona. as excessoes que funcionam dessa forma é este tipo de funcao e o var
console.log(apresentar());

function apresentar(){
    return "ola";
}

console.log(soma1(10,5));

//ja na expressiva não é possivel pois a funcao se comporta como uma variavel mesmo sendo assim nao pode ser chamada antes de inicializa-la
const soma1 = function(num1, num2){return num1 + num2};