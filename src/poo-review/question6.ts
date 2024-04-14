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

  public calcularValorTotalEmEstoque() {
    const valorTotal = this.preco * this.qtdEstoque

    return valorTotal
  }

  public verificarSeProdutoEstaDisponivel() {
    if (this.qtdEstoque > 0) return true

    return false
  }
}

const meuProduto = new Produto('Arroz', 20, 0)

console.log('nome do produto: ', meuProduto.nome)
console.log(
  'valor total em estoque: ',
  meuProduto.calcularValorTotalEmEstoque()
)
console.log('está disponível: ', meuProduto.verificarSeProdutoEstaDisponivel())
