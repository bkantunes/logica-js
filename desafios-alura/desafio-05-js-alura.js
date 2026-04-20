// Desafios

// 1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// Ex.: Altura: 1.65; Ex.: Peso: 43.0.
function imc(altura, peso){
    let imc = peso / (altura*altura);
    return imc;

};

/*
// Testando Abaixo do Peso
resultadoIMC = imc(1.65, 43);

// Testando Peso Normal
resultadoIMC = imc(1.65, 60.0); 

// Testando Sobrepeso
resultadoIMC = imc(1.65, 75.0); 

// Testando Obesidade
resultadoIMC = imc(1.65, 90.0);
*/

resultadoIMC = imc(1.65, 43);
console.log(resultadoIMC.toFixed(2));

function interpretarIMC(){

    if (resultadoIMC < 18.5){
        console.log('Abaixo do peso');
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 25){
        console.log('Peso normal');
    } 
    else if (resultadoIMC >= 25.0 && resultadoIMC <= 29.9){
        console.log('Sobrepeso');
    } 
    else {
        console.log('Obesidade');
    }
};


interpretarIMC();


// 2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial (n){
  ????
};

resultadoFatorial = calcularFatorial(4);
console.log(resultadoFatorial);

// 3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// 4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// 5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// 6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.