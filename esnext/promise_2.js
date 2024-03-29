function gerarNumerosEntre (min, max, tempo) {
  if(min > max) {
    [max, min] = [min, max, tempo]
      
  }
  return new Promise(resolve => {
    setTimeout(function() {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
    }, tempo)
  })
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 70, 500),
    gerarNumerosEntre(1, 60, 2000),
    gerarNumerosEntre(1, 60, 700),
    gerarNumerosEntre(1, 60, 600),
    gerarNumerosEntre(1, 60, 900),
    gerarNumerosEntre(1, 60, 300),
  ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))