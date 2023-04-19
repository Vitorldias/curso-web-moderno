//Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: Plano Aumento 
//A 10%
//B 15%
//C 20%
//Faça uma função em js que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calcularNovoSalario(plano, salarioAtual) {
  let novoSalario;

  switch (plano) {
    case "A":
      novoSalario = salarioAtual * 1.1;
      break;
    case "B":
      novoSalario = salarioAtual * 1.15;
      break;
    case "C":
      novoSalario = salarioAtual * 1.2;
      break;
    default:
      console.log("Plano inválido.");
      return;
  }

  console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}.`);
}

calcularNovoSalario("A", 3000);
calcularNovoSalario("B", 3000);
calcularNovoSalario("C", 3000);