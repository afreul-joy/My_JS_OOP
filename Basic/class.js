// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     sayHello() {
//       console.log('Hello!');
//     }
//   }
  
//   let person = new Person('John', 25);
//   console.log(person);

//   person.sayHello();
  

class Person {
    // Private variable
    #name;
  
    constructor(name) {
      this.#name = name;
    }
  
    // Public getter method
    getName() {
      return this.#name;
    }
  
    // Public setter method
    setName(newName) {
      this.#name = newName;
    }
  }
  
  // Create a new Person object
  const person = new Person("Alice");
  
  // Access the public getter method
  console.log(person.getName()); // "Alice"
  
  // Try to access the private variable directly
  // This will not work!
  // console.log(person.#name); // undefined
  
  // Use the public setter method to change the name
  person.setName("Bob");
  
  // Access the public getter method again
  console.log(person.getName()); // "Bob"
  