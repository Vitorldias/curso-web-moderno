class pessoa {
  constructor(nome) {
      this.nome = nome
  }
  falar () {
    console.log(`meu nome é ${this.nome}`)
  }
}

const p1 = new pessoa ('torvi')
p1.falar()

const CriarPessoa = nome => {
  return {
    falar: () => console.log(`meu nome é ${nome}`)
  }
}

const p2 = CriarPessoa('Torvi')
p2.falar()