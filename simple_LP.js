// Desafio 01
console.log('Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.');
let count = 1;
while (count <= 10){
    console.log(count)
    count++
}

console.log('\n');

// Desafio 02
console.log('Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.');
let count2 = 10;
while (count2 >= 0){
    console.log(count2)
    count2--
}

console.log('\n');

// Desafio 03
console.log('Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.');
let count3 = prompt('Contagem regressiva');
while (count3 >= 0){
    console.log(count3);
    count3--
}

console.log('\n')

//Desafio 04
console.log('Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.');
let input = prompt('Contagem Progressiva:');
count4 = 0;
while (input >= count4){
    console.log(count4);
    count4++
}
