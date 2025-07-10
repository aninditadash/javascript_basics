class Circle {
  // Static field: Shared across all instances of the class
  static PI = 3.14159;

  // Static method: Accessible directly on the class
  static calculateCircumference(radius) {
    return 2 * Circle.PI * radius;
  }

  // Instance field: Unique to each instance of the class
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method: Accessible on individual instances
  getArea() {
    return Circle.PI * this.radius * this.radius;
  }

  // Another instance method
  getDiameter() {
    return this.radius * 2;
  }
}

// Accessing static members
console.log(`Value of PI: ${Circle.PI}`);
console.log(`Circumference for radius 5: ${Circle.calculateCircumference(5)}`);

// Creating instances
const myCircle1 = new Circle(7);
const myCircle2 = new Circle(10);

// Accessing instance members
console.log(`Area of myCircle1: ${myCircle1.getArea()}`);
console.log(`Diameter of myCircle2: ${myCircle2.getDiameter()}`);

// Demonstrating that instance fields are unique
console.log(`Radius of myCircle1: ${myCircle1.radius}`);
console.log(`Radius of myCircle2: ${myCircle2.radius}`);
