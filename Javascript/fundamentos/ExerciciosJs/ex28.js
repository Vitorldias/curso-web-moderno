// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function contarParesEImpares(numeros) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0) {
      pares++;
    }else {
      impares++
    }
  }
  console.log(`O vetor tem ${pares} números pares e ${impares} números impares.`);
}

contarParesEImpares([578, 55, 78, 2, 4, 3, 8]);