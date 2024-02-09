class Funcionario {
  constructor(
    public nome: string,
    public salario: number,
    public cargo: string
  ) {
    this.nome = nome
    this.salario = salario
    this.cargo = cargo

    if (salario < 0) throw new Error('O salário deve ser um valor positivo')
  }

  salarioLiquido() {
    const TAXA_DESCONTO = 0.07
    const valorDescontado = this.salario * TAXA_DESCONTO
    const salarioLiquido = this.salario - valorDescontado
    return salarioLiquido
  }
}

const meuFuncionario = new Funcionario('Willame', 2000, 'Aluno')

console.log('Informações do funcionário')
console.log('Nome: ', meuFuncionario.nome)
console.log('Salário líquido: ', meuFuncionario.salarioLiquido())
