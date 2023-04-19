const alunos = [
  {nome: 'Torvi', nota : 9.2, bolsista: false},
  {nome: 'Maria', nota : 7.3, bolsista: true},
  {nome: 'Pedro', nota : 9.8, bolsista: false},
  {nome: 'Marcela', nota : 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)