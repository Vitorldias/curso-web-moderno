/* Utilizando a estrutura de repetição for, faça uma função em js que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações */

function contarNumerosNoIntervalo (vetor) {
  let dentroDoIntervalo = 0;
  let foraDoIntervalo = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] >= 10 && vetor [i] <=20) {
      dentroDoIntervalo++;
    }else {
      foraDoIntervalo++;
    }
  }
  console.log(`${dentroDoIntervalo} números estão dentro do intervalo [10,20] e ${foraDoIntervalo} números estão fora do intervalo.`)
}

contarNumerosNoIntervalo([11,12,13,14,15,22,88,65])