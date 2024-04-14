class Retangulo {
  constructor(public altura: number, public largura: number) {
    this.altura = altura
    this.largura = largura

    if (this.altura < 0 || this.largura < 0)
      throw new Error(
        'Os valores da altura e largura devem ser um número positivo'
      )
  }

  public area() {
    const area = this.altura * this.largura
    return area
  }

  public perimetro() {
    const perimetro = 2 * this.altura + 2 * this.largura
    return perimetro
  }
}

const meuRetangulo = new Retangulo(10, 2)

console.log('altura do retângulo: ', meuRetangulo.altura)
console.log('largura do retângulo: ', meuRetangulo.largura)
console.log('área: ', meuRetangulo.area())
console.log('perímetro: ', meuRetangulo.perimetro())
