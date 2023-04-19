// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

function calcularMedia (vetor) {
  let soma = 0;

  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
  }
  const media = soma / vetor.length;
  return media;
}

console.log(calcularMedia([10, 20, 30, 40, 55, 423]))