// Crie uma função em js que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function calcularDivisao(dividendo, divisor) {
  const resultado = Math.floor(dividendo / divisor);
  const resto = dividendo % divisor;


console.log(`Resultado: ${resultado}`);
console.log(`resto: ${resto}`);

}

calcularDivisao(10,3);
calcularDivisao(20,4);