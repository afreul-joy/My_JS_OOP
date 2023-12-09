//Qus 9. Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.
// ans
class Bank {
  constructor(name, branches) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch) {
    this.branches.push(branch);
    console.log("branch added successfully");
  }
  removeBranch(branch) {
    const index = this.branches.indexOf(branch);
    if (index !== -1) {
      this.branches.splice(index, 1);
      console.log("branch removed successfully");
    } else {
      console.log("branch not found");
    }
  }
  displayBranches() {
    if (this.branches.length === 0) {
      console.log("No Branches are available");
    } else {
      console.log("List of Bank Branches:");
      this.branches.forEach((branch, index) => {
        console.log(`${index + 1}. ${branch}`);
      });
    }
  }
}
// Create an instance of the Bank class
const bank = new Bank();
// Add branches
bank.addBranch("Branch A");
bank.addBranch("Branch B");
bank.addBranch("Branch C");
// Display all branches
bank.displayBranches();
// Remove a branch
bank.removeBranch("Branch B");
// Display all branches again
bank.displayBranches();
