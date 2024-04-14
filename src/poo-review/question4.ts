class Aluno {
  constructor(
    public nome: string,
    public matricula: string,
    public notas: number[]
  ) {
    this.nome = nome
    this.matricula = matricula
    this.notas = notas

    this.notas.forEach((nota) => {
      if (nota < 0 || nota > 10)
        throw new Error('A nota deve ser um valor entre 0 e 10')
    })
  }

  public media() {
    const media =
      this.notas.reduce((acc, nota) => acc + nota, 0) / this.notas.length
    return media
  }

  public verificarAprovacao() {
    const media = this.media()
    const situacao = media >= 7 ? 'Aprovado' : 'Reprovado'
    return situacao
  }
}

const meuAluno = new Aluno('Willame', '20211BCC0-007', [10, 0, 10, 10, 12])

console.log('nome do aluno: ', meuAluno.nome)
console.log('matricula: ', meuAluno.matricula)
console.log('média: ', meuAluno.media())
console.log('situação: ', meuAluno.verificarAprovacao())
