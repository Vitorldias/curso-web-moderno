// Utilizando a estrutura do Switch em js faça um programa que simule uma calculadora básica O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadora(num1, operador, num2) {
  let resultado;

  switch (operador){
    case "+":
      resultado = num1 + num2;
      break
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      console.log("Operação inválida");
      return;
  }

  console.log(`${num1} ${operador} ${num2} = ${resultado}`);
}

calculadora(2, "+", 3);
calculadora(10, "-", 4);
calculadora(5, "*", 8);
calculadora(265, "/", 5);
calculadora(3, "%", 5);