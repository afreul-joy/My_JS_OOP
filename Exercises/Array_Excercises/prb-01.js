// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

const is_array = (value) => {
  return Array.isArray(value);
};

// Test Data
console.log(is_array("w3resource")); // Output: false
console.log(is_array([1, 2, 4, 0])); // Output: true

const arr = [1, 2, 4, 0];
const newArr = [...arr]
console.log(newArr); // Output: