// estudando as diferenças entre declaração de variáveis na ordem var, let e const

var altura = 5;
var comprimento = 10;

//pode ser declarado com var ou sem o var, mas o js nao sabera se é uma constante ou variavel temporaria

area = altura * comprimento;
console.log(area);
var area;// a area pode ser declarado depois da execucao do programa no var

//------------------------------------

let forma = 'retangulo';
let altura1 = 5;
let comprimento1 = 10;
let area1; // undefined pois nao foi inicializada

if (forma === 'retangulo') {
    area1 = altura1 * comprimento1;
    
} else {
    area1 = (altura1 * comprimento1) /2;
        
}

console.log(area1);
//let area1; // se for colocado o let area1 aqui ocorre erro, pois ele deve ser declarado antes da execucao do programa. porem se nao for
          //  posto aqui o let area1 o programa funciona normalmente ou colocar var area1 funciona tambem. 

//-----------------------------------

const forma1 = 'triangulo';
const altura2 = 5;
const comprimento2 = 10;
//const area2 = altura2 * comprimento2; // ao inicializar uma variavel constante obrigatoriamente deve ser posto um valor para ela
let area2;

if (forma1 === 'quadrado') {
    area2 = altura2 * comprimento2;;// como nao foi declarado area (por enquanto) o programa coloca area2 como var pra funcionar o programa
    //area2; pode ser feito dessa forma onde a const é declarada em cima e eu chamo ela aqui 
} else {
    area2 = altura2 * comprimento2 /2;
    //area2 /2; e é possivel realizar uma operacao apenas chamando ela tambem

}

console.log(area2);

