class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public qtdEstoque: number
  ) {
    this.nome = nome
    this.preco = preco
    this.qtdEstoque = qtdEstoque

    if (preco < 0) throw new Error('O preço deve ser um valor positivo')
    if (qtdEstoque < 0)
      throw new Error('A quantidade de produtos deve ser um valor positivo')
  }

  calcularValorTotalEmEstoque() {
    const valorTotal = this.preco * this.qtdEstoque

    return valorTotal
  }

  verificarSeProdutoEstaDisponivel() {
    if (this.qtdEstoque > 0) {
      return true
    }

    return false
  }
}

const meuProduto = new Produto('Arroz', 20, 0)

console.log('Informações do produto')
console.log('Nome: ', meuProduto.nome)
console.log(
  'Valor total em estoque: ',
  meuProduto.calcularValorTotalEmEstoque()
)
console.log('Está disponível: ', meuProduto.verificarSeProdutoEstaDisponivel())
