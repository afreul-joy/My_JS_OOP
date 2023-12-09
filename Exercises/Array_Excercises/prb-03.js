// Qus 3: Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []


function getFirstElements(arr, n) {
    // If n is not provided or is greater than the length of the array,
    // return the first element of the array
    if (n === undefined || n > arr.length) {
        return arr[0];
    } else {
        // Return an array containing the first n elements
        return arr.slice(0, n);
    }
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];

// Without specifying n, it returns the first element
console.log(getFirstElements(myArray)); // Output: 1

// Specifying n (e.g., n = 3), it returns the first 3 elements
console.log(getFirstElements(myArray, 3)); // Output: [1, 2, 3]

console.log(getFirstElements(myArray, 9)); // Output: [1, 2, 3]




