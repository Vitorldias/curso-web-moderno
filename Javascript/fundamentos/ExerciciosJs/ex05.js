//  Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

function formatarValor(valor) {
  const valorFormatado = valor.toLocaleString('pt-BR', {minimumFractionDigits: 2});
  return valorFormatado;
}

console.log(formatarValor(0.30000000000000004));
console.log(formatarValor(10.5));