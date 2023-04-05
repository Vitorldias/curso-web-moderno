// pessoa => 123 => {...}
const pessoa = { nome: 'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Torvi'})
console.log(pessoaConstante)