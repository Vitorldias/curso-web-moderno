// Crie uma função em js que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.

function trocaElementos(vetorA, vetorB) {
  if (vetorA.length !== vetorB.length) {
    console.log("Os vetores precisam ter o mesmo tamanho!");
    return;
  }

  for (let i = 0; i < vetorA.length; i++) {
    vetorA[i] ^= vetorB[i];
    vetorB[i] ^= vetorA[i];
    vetorA[i] ^= vetorB[i];
  }

  console.log("Vetor A: " + vetorA);
  console.log("Vetor B: " + vetorB);
}
trocaElementos(1.1, 100)
