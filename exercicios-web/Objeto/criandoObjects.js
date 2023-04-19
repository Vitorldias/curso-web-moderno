//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('joão', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
const f3 = criarFuncionario('torvi', 4690, 1);
console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())

// uma função famosa que retorna um objeto

const fromJSON= JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON)