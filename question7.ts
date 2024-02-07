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

  area() {
    const semiPerimetro = (1 / 2) * (this.lado1 + this.lado2 + this.lado3)
    const area = Math.sqrt(
      semiPerimetro *
        (semiPerimetro - this.lado1) *
        (semiPerimetro - this.lado2) *
        (semiPerimetro - this.lado3)
    ).toFixed(2)
    return area
  }

  verificarSeEValido() {
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

console.log('lado1 do retângulo: ', meuTriangulo.lado1)
console.log('lado2 do retângulo: ', meuTriangulo.lado2)
console.log('Área: ', meuTriangulo.area())
console.log('É válido: ', meuTriangulo.verificarSeEValido())
