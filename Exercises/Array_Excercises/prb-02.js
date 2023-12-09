// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// method 1:
// function cloneArr(arr) {
//   return [...arr]
// }
// console.log(cloneArr([1, 2, 4, 0]));
// console.log(cloneArr([1, 2, [4, 0]]));

// const generateArray= (arr) =>{
//    const newArr = [...arr]
//    console.log(newArr);
// }

// generateArray([1, 2, 4, 50])

// method 2:
const cloneArray= (arr) => {
    return arr.slice()
}

const originalArray= [1, 2, 4, 50]
const clonearr = cloneArray(originalArray)
console.log(originalArray)
console.log(clonearr)