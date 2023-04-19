/*Criar uma função em js para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido */
function calcularAnuidade(mes, valorAnuidade) {
  if (mes < 1 || mes > 12) {
    return "Mês inválido";
  }
  if (mes === 1) {
    return valorAnuidade;
  }
  let juros = Math.pow(1.05, mes - 1);
  let valorMes = valorAnuidade * juros;
  return valorMes.toFixed(2);
}

console.log(calcularAnuidade(3, 100));