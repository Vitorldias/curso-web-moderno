// Escreva um algoritmo em js  que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function encontrarMaiorQue(vetor) {
  let maior = vetor[0];
  let menor = vetor[0];

  for (let i = 1; i < vetor.length; i++){
    if(vetor[i] > maior) {
      maior = vetor[i];
    }else if (vetor[i] < menor) {
      menor = vetor[i];
    }
  }
  console.log(`O maior valor do vetor é ${maior} e o menor valor é ${menor}.`);
}

encontrarMaiorQue([10, 22, 5, 10, 100, 58, 98, 56, 33,])