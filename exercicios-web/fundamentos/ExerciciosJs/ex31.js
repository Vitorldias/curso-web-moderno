// Escrever um algoritmo em js que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

function contarNegativos (vetor) {
  let count = 0;

  for(let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      count++
    }
  }
  console.log(`O vetor tem ${count} números negativos`);
}

contarNegativos([10, 11, 12, -4, -9, 0, -3, -66, -989, 45])