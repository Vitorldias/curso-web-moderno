//vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [1, 2, 3, 4];
const vetorString = ['um', 'dois', 'três', 'quatro'];
const vetorDouble = [1.1, 2.2, 3.3, 4.4];

const vetorConcat1 = vetorInteiro.concat(vetorString);
console.log(vetorConcat1);

const vetorConcat2 = vetorInteiro.concat(vetorString, vetorDouble);
console.log(vetorConcat2);