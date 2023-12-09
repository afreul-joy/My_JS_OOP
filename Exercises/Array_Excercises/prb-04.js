// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

function getLastElements(arr, n) {
  // If 'n' is not provided or greater than the array length, return the entire array
  if (n === undefined || n > arr.length) {
    return arr.slice(-1)
  }

  // Return the last 'n' elements of the array
  return arr.slice(-n);
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];

// Get the last element of the array
console.log(getLastElements(myArray)); // Output: [5]

// Get the last 3 elements of the array
console.log(getLastElements(myArray, 2)); // Output: [3, 4, 5]
