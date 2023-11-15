class Student {
  constructor(name, age) {
    this.name = name;
    this.age =this.ageLimit(age);
  }
  ageLimit(age) {
    if (age <= 40 && age > 0) {
      return age;
    } else {
      throw new Error("Age limit");
    }
  }
}

class Topper extends Student {
    constructor(name,age,study){
        super(name,age)
        this.study = study
    }
    printDetails(){
        console.log(`Name: ${this.name} and age is ${this.age} and study ${this.study}`)
    }
 }

 const joy = new Topper('joy',23,'2h')
 joy.printDetails()