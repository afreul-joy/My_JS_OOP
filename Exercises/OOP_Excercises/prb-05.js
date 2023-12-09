//Ques 5. Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

// answer :
class Shape {
  calculateArea() {
    console.log("calculateArea ");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    // Formula for the area of a circle: π * r^2
    const circleArea = 3.1416 * (this.radius * this.radius);
    console.log(`calculateArea  ${circleArea} `);
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    // Formula for the area of a triangle: 0.5 * base * height
    const triangleArea = 0.5 * (this.base * this.height);
    console.log(`calculateArea  ${triangleArea} `);
  }
}

const myCircle = new Circle(2);
myCircle.calculateArea();

const myTriangle = new Triangle(2, 5);
myTriangle.calculateArea();
