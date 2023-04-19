console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
  console.log('Dentro de uma função')
  console.log(this === exports)
}

logThis() //dentro de uma função é acessado o global, fora de uma função é acessado o module.exports