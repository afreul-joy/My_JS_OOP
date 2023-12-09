    // Qus 8. Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

    // answer
    class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log("Make some noise");
    }
    }

    class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }
    makeSound() {
        console.log(`${this.species}, ${this.sound}, ${this.color}`);
    }
    }

    const tom = new Dog("German", "Wahhh", "White");
    tom.makeSound()
