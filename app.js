let numeroSecreto = gerarNumero();
function gerarNumero(){
    numero = parseInt(Math.random()*100 + 1);
    return numero;
}

console.log(numeroSecreto);


/*
alert(`Boas vindas ao jogo do número secreto.`);
let secretNumber = 5
console.log(secretNumber);
let guess;
let tries = 1;
console.log(guess);

// lógica do jogo
while (guess != secretNumber){
    guess = prompt(`Digite o número secreto:`);
    if (guess == secretNumber){
    alert(`Você acertou o número (${secretNumber}) secreto! com ${tries} tentativas.`);
} else if ( guess > secretNumber){
    alert(`O número secreto é menor que ${guess}.`);

} else {
    alert(`O número secreto é maior que ${guess}.`);
}
    tries++
}

*/