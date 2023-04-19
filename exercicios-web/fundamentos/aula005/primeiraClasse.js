//função em JS é first-class objects (citzens)
//higher-order function

//criar de forma literal

function fun1() {}

//armazenar em uma variavel
const fun2 = function() {}

//armazenar em array

const array = [function(a, b) { return a+ b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'opa'}
console.log(obj.falar())

//passar função como param
function run (fun) {
  fun()
}

run(function() { console.log('executando...')})

//uma função pode tenormar/conter uma função

function soma (a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(5)

