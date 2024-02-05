class Circle {
  constructor(public radius: number) {
    this.radius = radius;
  }

  calculateArea() {
    const areaCircle = Math.PI * Math.pow(this.radius, 2);
    return areaCircle;
  }

  calculatePerimeter() {
    const perimeterCircle = 2 * Math.PI * this.radius;
    return perimeterCircle;
  }
}

const myCircle = new Circle(3);

console.log(
  `Para um círculo de raio ${myCircle.radius}, o valor da sua área é ${
    myCircle.calculateArea
  } e do seu perímetro é ${myCircle.calculatePerimeter()}`
);
