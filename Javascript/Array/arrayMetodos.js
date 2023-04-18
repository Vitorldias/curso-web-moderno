const pilotos = ['Vettel', 'Alonso', 'Raikkonen','Massa']
pilotos.pop() // massa quebrou o carro! - retira o ultimo do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento ao array
console.log(pilotos)

pilotos.shift() // remove o primeiro do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover 

pilotos.splice(3, 1) // massa foi de base
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)