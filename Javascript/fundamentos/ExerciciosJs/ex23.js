/*Escreva um algoritmo em js que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */
const prompt = require("prompt-sync")({sigint:true});
function calcularMediaPonderada(codigo, nota1, nota2, nota3) {
  let peso1 = 4;
  let peso2 = 3;
  let peso3 = 3;
  let maiorNota = Math.max(nota1, nota2, nota3);
  let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
  
  console.log("Código do aluno: " + codigo);
  console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3);
  console.log("Média: " + media.toFixed(2));
  
  if (media >= 5) {
    console.log("APROVADO");
  } else {
    console.log("REPROVADO");
  }
}

let codigo = 0;

calcularMediaPonderada(200, 5, 9, 2);
