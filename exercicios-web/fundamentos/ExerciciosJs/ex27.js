// Construa uma função em js que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
  let anos = 0;

  if (altura1 === altura2) {
    if (taxa1 > taxa2) {
      return `A primeira criança ultrapassará a segunda em 1 ano.`;
    } else if (taxa1 < taxa2) {
      return `A segunda criança ultrapassará a primeira em 1 ano.`;
    } else {
      return `As crianças têm a mesma altura e a mesma taxa de crescimento.`;
    }
  } else {
    if (altura1 < altura2) {
      let auxAltura = altura1;
      let auxTaxa = taxa1;
      altura1 = altura2;
      taxa1 = taxa2;
      altura2 = auxAltura;
      taxa2 = auxTaxa;
    }

    while (altura1 > altura2) {
      altura1 += altura1 * taxa1 / 100;
      altura2 += altura2 * taxa2 / 100;
      anos++;
    }

    return `A segunda criança ultrapassará a primeira em ${anos} anos.`;
  }
}

console.log(calcularCrescimento(120, 1, 10,2));