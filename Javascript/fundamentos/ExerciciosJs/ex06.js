//Elabore duas funções em js que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

// jutos simples

function calcularJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
  const montante = capitalInicial * (1 + taxaJuros * tempoAplicacao);
  return montante
}

console.log(calcularJurosSimples(1000, 0.1, 2));

//Juros compostos

function calcularJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
  const montante = capitalInicial * Math.pow(1 + taxaJuros, tempoAplicacao);
  return montante;
}

console.log(calcularJurosCompostos(1000, 0.1, 2));