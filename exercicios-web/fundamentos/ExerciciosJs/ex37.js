// Escreva duas funções em js, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos.

//progressão aritmetica
function pa (n, a1, r) {
  let termos = [];
  let soma = 0;

  for (let i = 1; i <=n; i++) {
    let termo = a1 + (i - 1) * r;
    termos.push(termo);
    soma += termo;
  }
  console.log("termos de pa:", termos);
  console.log("soma dos termos da pa: ", soma);
}

pa(5, 2, 3)

//progressão geometica

function pg(n, a1, r) {
  let termos = [];
  let soma = 0;

  for (let i = 1; i <= n; i++) {
    let termo = a1 * Math.pow(r, i-1);
    termos.push(termo);
    soma += termo;
  }
  console.log("termos da pg:", termos);
  console.log("soma dos termos da pg:", soma);
}

pg(4, 1, 2)