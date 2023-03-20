//par nome/valor

const saudacao = 'opa' //contexto léxico 1

function exec() {
  const saudacao = 'faaaaala' // contexto lexico 2
  return saudacao
}

//objetos sai grupos aninhados de pares nome/valor

const cliente = {
  nome:'Pedro',
  idade: 32,
  peso:90,
  endereco: {
      logradouro:'rua muito legal',
      numero:123,
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)