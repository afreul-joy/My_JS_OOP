class Player {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = this.#AgeLimit(age);
  }

  #AgeLimit(age) {
    if (age <= 40 && age > 0) {
      return age;
    } else {
      throw new Error("Age limit");
    }
  }
  PlayerDetails() {
    console.log(`name : ${this.#name} & age : ${this.#age}`);
  }
}

class Cricketer extends Player {
  #centuries;
  constructor(name, age, centuries) {
    super(name, age);
    this.#centuries = centuries;
  }
  print() {
    console.log(`centuries ${this.#centuries} `);
  }
}

const sakib = new Cricketer("sakib al hasan", 26, 15);
sakib.PlayerDetails()
sakib.print();
