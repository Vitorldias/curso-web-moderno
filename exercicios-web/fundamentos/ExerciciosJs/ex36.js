// Crie duas funções em js que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

function multiplicaPorNumero(vetor, numero) {
  let resultado = [];

  for (let i = 0; i < vetor.length; i++) {
    resultado.push(vetor[i] * numero);
  }
  return resultado;
}

function multiplicaPorNumeroMaiorQue5(vetor, numero) {
  let resultado = [];

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 5) {
      resultado.push(vetor[i] * numero) ;
    }else {
      resultado.push(vetor[i]);
    }
  }
  return resultado;
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultado1 = multiplicaPorNumero(vetor, 3);
console.log(resultado1); 

let resultado2 = multiplicaPorNumeroMaiorQue5(vetor, 4);
console.log(resultado2);