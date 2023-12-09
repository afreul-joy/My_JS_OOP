// problem - Program to Convert the First Letter of a String in to Uppercase in Javascript

const str = "hello world";
const index = str.split("");
const upperCase = index[0].toUpperCase();
console.log(upperCase);
const newstr = upperCase + str.slice(1);
console.log(newstr);


