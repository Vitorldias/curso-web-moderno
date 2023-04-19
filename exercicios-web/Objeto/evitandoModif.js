const produto = Object.preventExtensions({
  nome: 'qualquer', preco: 1.99, tag: 'promoçao'
})

console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//object.seal

const pessoa = {
  nome: 'juliana',
  idade: 45,
}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)