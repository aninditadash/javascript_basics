class Circle {
  static PI = 3.14159;

  static calculateCircumference(radius) {
    return 2 * Circle.PI * radius;
  }

  diameter = 0;

  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Circle.PI * this.radius * this.radius;
  }

  getDiameter() {
    return this.radius * 2;
  }
}

// Accessing static members
console.log(`Value of PI: ${Circle.PI}`);
console.log(`Circumference for radius 5: ${Circle.calculateCircumference(5)}`);

const myCircle1 = new Circle(7);
const myCircle2 = new Circle(10);

console.log(`Area of myCircle1: ${myCircle1.getArea()}`);
console.log(`Diameter of myCircle2: ${myCircle2.getDiameter()}`);

console.log(`Radius of myCircle1: ${myCircle1.radius}`);
console.log(`Radius of myCircle2: ${myCircle2.radius}`);
