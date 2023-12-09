// 4. Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    const dep = this.balance + amount;
    this.balance = dep;  
    console.log(` new balance - ${dep}`);
    return dep;
  }
  withdraw(amount) {
    const withdraw = this.balance - amount;
    this.balance = withdraw;
    console.log(` new balance - ${withdraw}`);
    return withdraw;
  }
}

const bankAccount1 = new BankAccount(101, 1000);
bankAccount1.deposit(800);
bankAccount1.withdraw(300);
