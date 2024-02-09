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

  public salarioLiquido(descontos: number, beneficios: number) {
    // const TAXA_DESCONTO = 0.07
    // const valorDescontado = this.salario * TAXA_DESCONTO
    // const salarioLiquido = this.salario - valorDescontado
    const salarioLiquido = this.salario - descontos + beneficios
    return salarioLiquido
  }
}

const meuFuncionario = new Funcionario('Willame', 2000, 'Aluno')

console.log('nome do funcionário: ', meuFuncionario.nome)
console.log('salário bruto: ', meuFuncionario.salario)
console.log('salário líquido: ', meuFuncionario.salarioLiquido(200, 100))
