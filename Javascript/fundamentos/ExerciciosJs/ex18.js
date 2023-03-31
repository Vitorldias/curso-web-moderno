// Faça um programa em js que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’

function numeroExtenso(numero) {
  console.log(`Digite um número de 0 a 10: ${numero}`);


switch (numero) {
  case 0:
    console.log("Zero");
    break;
  case 1:
    console.log("Um");
    break;
  case 2:
    console.log("Dois");
    break;
  case 3:
    console.log("Três");
    break;
  case 4:
    console.log("Quatro");
    break;
  case 5:
    console.log("Cinco");
    break;
  case 6:
    console.log("Seis");
    break;
  case 7:
    console.log("Sete");
    break;
  case 8:
    console.log("Oito");
    break;
  case 9:
    console.log("Nove");
    break;
  case 10:
    console.log("Dez");
    break;
  default:
    console.log("Número fora do intervalo.");

  }
}
numeroExtenso(10);
numeroExtenso(5);
numeroExtenso(6);
numeroExtenso(8);
numeroExtenso(7);
numeroExtenso(1);
