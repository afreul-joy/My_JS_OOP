let string = "madam";

let reverseString = string.split("").reverse().join("");
// console.log(palindrome);

if (string === reverseString) {
  console.log("Palindrome: " + reverseString);
} else {
  console.log("No palindrome : " + reverseString);
}
