function tratarErroELancar(erro){
  //throw new Error ('...')
  throw 'socorro invadirão minha casa e roubarão tudo'
  
  
}
function imprimirNomeGritado (obj) {
  try {
  console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'torvi'}
imprimirNomeGritado(obj)