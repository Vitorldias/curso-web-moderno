/* Criar um programa em js para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function identificarValor(idade) {
  let valorTotal = valor + 100;
  if (idade < 10) {
    var valor = 80;
  } else if (idade >= 10 && idade <= 30) {
    var valor = 50;
  } else if (idade > 30 && idade <= 60) {
    var valor = 95;
  } else {
    var valor = 130;
  }
  console.log(`O valor a ser pago pelo plano de saúde é R$ ${valor + 100}`);
}

identificarValor(8);
identificarValor(80);
identificarValor(86);
identificarValor(58);