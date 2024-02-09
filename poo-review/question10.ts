class Livro {
  public status: string

  constructor(
    public titulo: string,
    public autor: string,
    public numeroDePaginas: number
  ) {
    this.titulo = titulo
    this.autor = autor
    this.numeroDePaginas = numeroDePaginas
    this.status = 'DISPONIVEL'

    if (this.numeroDePaginas < 0)
      throw new Error('O número de páginas não pode ser um valor negativo')
  }

  emprestar() {
    this.status = 'INDISPONIVEL'
  }
  devolver() {
    this.status = 'DISPONIVEL'
  }

  verificarSeEstaDisponivel() {
    if (this.status === 'DISPONIVEL') return true
    return false
  }
}

const meuLivro = new Livro('1984', 'George Orwell', 328)

console.log('título do livro: ', meuLivro.titulo)
console.log('autor do livro: ', meuLivro.autor)
console.log('n° de páginas do livro: ', meuLivro.numeroDePaginas)

console.log('o livro está disponível: ', meuLivro.verificarSeEstaDisponivel())
meuLivro.emprestar()
console.log('o livro está disponível: ', meuLivro.verificarSeEstaDisponivel())
meuLivro.devolver()
console.log('o livro está disponível: ', meuLivro.verificarSeEstaDisponivel())
