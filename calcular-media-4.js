// Minha resposta

function calcularMedia(n1,n2,n3,n4){
    media = (n1+n2+n3+n4)/4;
    return media;
}

resultadoMedia = calcularMedia(7,6,3,3);
console.log(resultadoMedia);

   function verificarAprovacao(){
    let status = resultadoMedia >= 5 ? 'Aprovado' : 'Reprovado';
    console.log(status);
};

verificarAprovacao();



/*

Você foi contratado (a) para desenvolver uma calculadora de média e verificar a situação de aprovação de um aluno com base em suas quatro notas. A média para aprovação é 5. Sua tarefa é implementar duas funções em JavaScript:

calcularMedia(nota1, nota2, nota3, nota4)=> Esta função recebe as quatro notas do aluno como parâmetros e retorna a média calculada com base nessas notas.
verificarAprovacao(media) => Esta função recebe a média do aluno como parâmetro e retorna "Aprovado" se a média for maior ou igual a 5, caso contrário, retorna "Reprovado".

let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

*/

/*
Resposta Alura

function verificarAprovacao(media){
    return media >= 5 ? 'Aprovado' : 'Reprovado';
}

resultMedia = verificarAprovacao(4.75);
console.log(resultMedia);


*/