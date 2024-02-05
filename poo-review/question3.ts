class Retangulo {
  constructor(public altura: number, public largura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  area() {
    const area = this.altura * this.largura;
    return area;
  }

  perimetro() {
    const perimetro = 2 * this.altura + 2 * this.largura;
    return perimetro;
  }
}

const meuRetangulo = new Retangulo(10, 2);

console.log("Altura do retângulo: ", meuRetangulo.altura);
console.log("Largura do retângulo: ", meuRetangulo.largura);
console.log("Área: ", meuRetangulo.area());
console.log("Perímetro: ", meuRetangulo.perimetro());
