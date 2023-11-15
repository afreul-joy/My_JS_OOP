class Robot {
  #name;
  #time;

  constructor(name, time) {
    this.#name = name;
    this.#time = this.#workingTime(time);
  }

  #workingTime(time) {
    if (time > 24) {
      throw new Error("Time must be between 24 and 24");
    } else {
      return time;
    }
  }

  printResults() {
    console.log(
      `Robot name is : ${this.#name} and working time :${this.#time} `
    );
  }
}

const robot1 = new Robot("Sopia", 8);
robot1.printResults();
