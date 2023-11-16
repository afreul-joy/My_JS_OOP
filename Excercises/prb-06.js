//Qus 6. Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.

// answer:
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  annualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
    console.log(
      `name ${name} base salary ${this.salary} department ${this.department}`
    );
  }
  setBonus (bonus) {
    this.bonus = bonus;
  }
  annualSalary() {
    const totalSalary = this.salary * 12 + this.bonus
    console.log(`annual salary with bonus ${totalSalary}`);
    return totalSalary;
  }
}

const manager1 = new Manager("John", 20000, "IT");
manager1.setBonus(30)
manager1.annualSalary();

const manager2 = new Manager("Harry", 30000, "Human");
manager2.setBonus(30)
manager2.annualSalary();
