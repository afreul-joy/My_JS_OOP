class Person {
  // Private properties
  #name; // Private property for person's name
  #age;  // Private property for person's age

  // Constructor to initialize the object with a name and age
  constructor(name, age) {
    this.#name = name;               // Set the private name property
    this.#age = this.#validateAge(age); // Set the private age property after validation
  }

  // Private method to validate that the age is not negative
  #validateAge(age) {
    if (age < 0) {
      throw new Error("Age cannot be negative.");
    } else {
      return age;
    }
  }

  // Public method to retrieve and log person's data
  getData() {
    console.log(`Name: ${this.#name} Age: ${this.#age}`);
  }
}

// Create an instance of the Person class with name "John" and age 20
const person = new Person("John", 20);

// Call the getData method to display person's data
person.getData();
