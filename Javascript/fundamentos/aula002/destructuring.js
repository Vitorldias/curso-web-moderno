//novo recurso do es2015

const pessoa = {
  nome:'billi',
  idade:'77',
  endereço: {
    logradouro:'rua jaaj uau',
    numero: 768
  }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade:i } = pessoa
console.log(n, i)

const {sobreNome, bemHumorada = true } = pessoa
console.log(sobreNome, bemHumorada)
