//  Faça uma função em js que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A

function atribuirConceitos (notas) {
  const conceitos = [];

  for (let i = 0; i < notas.length; i++) {
    const nota = notas [i];
    let conceito;

    if (nota >= 0 && nota <= 4.9) {
      conceito = "D";
    }else if (nota >= 5 && nota <= 6.9){
      conceito = "C";
    }else if (nota >= 7 && nota <= 8.9){
      conceito = "B";
    }else if (nota >= 9 && nota <= 10) {
      conceito = "A";
    }else {
      conceito = "Nota inválida";
    }
    conceitos.push(conceito);
  }

  return conceitos;
}

const notas = [8.5, 6.0, 9.2, 4.3, 7.8];
const conceitos = atribuirConceitos(notas);
console.log(conceitos);