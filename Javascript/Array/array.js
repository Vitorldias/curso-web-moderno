let aprovados = new Array('Bia', 'Carlos', 'Ana');
 console.log(aprovados)

 aprovados = ['Bia', 'Carlos', 'Ana']
 console.log(aprovados[0])
 console.log(aprovados[1])
 console.log(aprovados[2])
 console.log(aprovados[3])

 aprovados[3] = 'Paulo'
aprovados.push('Chiliscanca')
console.log(aprovados.length)

aprovados[9] = 'Torvi'
console.log(aprovados.length)
console.log(aprovados)

aprovados .sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos','ana']
aprovados.splice(1, 1)
console.log(aprovados)