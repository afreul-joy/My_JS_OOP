// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter(পরিসীমা). Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  rectangleArea() {
    const areaCalc = this.width * this.height;
    console.log(areaCalc);
    return areaCalc;
  }

  rectanglePerimeter() {
    const periCalc = 2 * (this.width + this.height); //perimeter=2×(width+height)
    console.log(periCalc);
    return periCalc;
  }
}

const rec = new Rectangle(10, 20);
rec.rectangleArea();
rec.rectanglePerimeter();
