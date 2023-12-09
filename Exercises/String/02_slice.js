// Problem: Remove last character-
var str = "hello world";

// console.log(str.slice(0,str.length-1));


// problem 2: Remove String Before specific characters
var str = "Hello world"
var indexOfChar = str.indexOf("H")
const result = str.slice(indexOfChar+1,str.length)

console.log(indexOfChar)
console.log(result)
