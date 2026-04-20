// Funções - Exercícios

// Desafios

// 1.Criar uma função que exibe "Olá, mundo!" no console.

function exibirOlaMundo(){
    console.log("Olá, Mundo!")
}

exibirOlaMundo()

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

/*
function getNome(){
    let nome = prompt(`Qual seu nome?`);
    console.log(`Olá ${nome}!`);
}

getNome();
*/

// Mais correto, atende ao enunciado.
//2.1  Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibeOlaNome(nome){
    console.log(`Olá, ${nome}!`);

}

exibeOlaNome("BK");

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobroNumero(n){
    n = n*2;
    console.log(n);
}
//funcionando apenas com Integer. Como multiplicar Float? // Saiu de NaN para um decimal do nada... 
dobroNumero(2.7);

// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaDeTres(x,y,z){
    let media = ((x+y+z)/3);
    console.log(media);
}

mediaDeTres(2.5,3,4);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// primeira tentativa
function maiorQue (x,y){
    if (x > y){
        console.log(x);
    } else if (y > x) {
        console.log(y);
    } else {
        console.log("Erro");
    }

}

maiorQue(5,8);

// tentativa mais enxuta
function maisQue (x,y){
    if (x > y){
        console.log(x);
    } else {
        console.log(y);
    }

}

maisQue(4,2);

// resposta Alura
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function elevarAoQuadrado(n){
    quadrado = (n*n);
    console.log(quadrado);
}

elevarAoQuadrado(5);

// resposta Alura
function quadrado(numero) {
  return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado); 

// Nas respostas dada pela Alura, as variáveis e o resultado são criados e exibidos fora das funções. Creio que assim dê para aproveitar melhor o resultado em outras partes do código...

