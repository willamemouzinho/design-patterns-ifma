class Circle {
  constructor(public radius: number) {
    this.radius = radius

    if (this.radius < 0)
      throw new Error('O raio precisa ser um número positivo')
  }

  public calculateArea() {
    const areaCircle = (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
    return areaCircle
  }

  public calculatePerimeter() {
    const perimeterCircle = (2 * Math.PI * this.radius).toFixed(2)
    return perimeterCircle
  }
}

const myCircle = new Circle(3)

console.log(
  `Para um círculo de raio ${
    myCircle.radius
  }, o valor da sua área é ${myCircle.calculateArea()} e do seu perímetro é ${myCircle.calculatePerimeter()}`
)
