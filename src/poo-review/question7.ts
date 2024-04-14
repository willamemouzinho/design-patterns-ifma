class Triangulo {
  constructor(
    public lado1: number,
    public lado2: number,
    public lado3: number
  ) {
    this.lado1 = lado1
    this.lado2 = lado2
    this.lado3 = lado3
  }

  public area() {
    const trianguloEValido = this.verificarSeEValido()
    if (!trianguloEValido)
      throw new Error('As dimensões fornecidas são inválidas')
    const semiPerimetro = (1 / 2) * (this.lado1 + this.lado2 + this.lado3)
    const area = Math.sqrt(
      semiPerimetro *
        (semiPerimetro - this.lado1) *
        (semiPerimetro - this.lado2) *
        (semiPerimetro - this.lado3)
    ).toFixed(2)
    return area
  }

  public verificarSeEValido() {
    if (this.lado1 < 0 || this.lado2 < 0 || this.lado3 < 0) return false
    if (
      this.lado1 + this.lado2 > this.lado3 &&
      this.lado1 + this.lado3 > this.lado2 &&
      this.lado2 + this.lado3 > this.lado1
    )
      return true
    return false
  }
}

const meuTriangulo = new Triangulo(5, 4, 4)

console.log('lado 1 do triângulo: ', meuTriangulo.lado1)
console.log('lado 2 do triângulo: ', meuTriangulo.lado2)
console.log('lado 3 do triângulo: ', meuTriangulo.lado3)
console.log('área: ', meuTriangulo.area())
console.log('é válido: ', meuTriangulo.verificarSeEValido())
