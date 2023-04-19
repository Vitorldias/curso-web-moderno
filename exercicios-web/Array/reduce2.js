const alunos = [
  {nome: 'Torvi', nota : 9.2, bolsista: false},
  {nome: 'Maria', nota : 7.3, bolsista: true},
  {nome: 'Pedro', nota : 9.8, bolsista: false},
  {nome: 'Marcela', nota : 8.7, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))