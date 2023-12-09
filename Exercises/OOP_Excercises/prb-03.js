// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.

class Vehicle {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }
  display() {
    console.log(`Vehicle ${this.name} with ${this.model} and ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(name, model, year, noOfDoors) {
    super(name, model, year);
    this.noOfDoors = noOfDoors;
  }
  display() {
    console.log(
      `Vehicle ${this.name} with ${this.model} and ${this.year} and ${this.noOfDoors}`
    );
  }
}

const car1 = new Car("Audi", "A3", 2022, 4);
car1.display();
