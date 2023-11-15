// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Method to make a sound
  makeSound() {
    console.log("Some generic sound");
  }
}

// Derived class 2
class Cat extends Animal {
  // Override the makeSound method
  makeSound() {
    console.log("Meow!");
  }

  // New method specific to Cat class
  purr() {
    console.log(`${this.name} is purring`);
  }
}

// Create instances of the classes
// const genericAnimal = new Animal("Generic Animal");
const cat = new Cat("Whiskers");

// Demonstrate polymorphism by calling the methods directly on the objects
// genericAnimal.makeSound(); // Outputs: Some generic sound

cat.makeSound(); // Outputs: Meow!
cat.purr(); // Outputs: Whiskers is purring
