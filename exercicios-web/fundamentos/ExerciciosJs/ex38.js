// Escreva uma função em js que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function imprimeImpares (inicio = 0, fim = 100) {
  if (inicio > fim) {
    [inicio, fim] = [fim, inicio];
  }

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

imprimeImpares();
imprimeImpares(10, 30);
imprimeImpares(40, 20)