/*Crie um programa em js para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

// solicita ao usuário um valor em reais

function calcularNotas(valor) {
  // converte o valor para um número inteiro
  valor = parseInt(valor);

  // cria um objeto com a quantidade de cada nota disponível
  var notas = {
    "100": 0,
    "50": 0,
    "10": 0,
    "5": 0,
    "1": 0
  };

  // loop para calcular a quantidade de cédulas necessárias
  while (valor > 0) {
    if (valor >= 100) {
      valor -= 100;
      notas["100"]++;
    } else if (valor >= 50) {
      valor -= 50;
      notas["50"]++;
    } else if (valor >= 10) {
      valor -= 10;
      notas["10"]++;
    } else if (valor >= 5) {
      valor -= 5;
      notas["5"]++;
    } else {
      valor -= 1;
      notas["1"]++;
    }
  }

  // cria a string de resultado
  var resultado = "";
  for (var nota in notas) {
    if (notas[nota] > 0) {
      resultado += notas[nota] + " nota(s) de R$ " + nota + ". ";
    }
  }

  // retorna a string de resultado
  return resultado;
}

console.log(calcularNotas(180));
console.log(calcularNotas(16));