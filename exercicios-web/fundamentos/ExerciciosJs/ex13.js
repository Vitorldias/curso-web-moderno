// Crie um programa em js que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
function verificarDia(dia) {
  switch (dia) {
    case 1:
      console.log("Domingo é fim de semana.");
      break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        console.log("Dia útil.");
        break;
      case 7:
        console.log("Sábado é fim de semana.");
        break;
      default:
        console.log("Dia inválido");
  }
}

verificarDia(1);
verificarDia(3);
verificarDia(7);
verificarDia(10);