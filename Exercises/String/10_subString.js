// let str = "hello world";
// let subStr = "hello";

// if (str.indexOf(subStr) === -1) {
//   console.log("false");
// } else {
//   console.log("true");
// }

const string = "Hello world";
const startCharacter = "H";
const endCharacter = "d";

const startIndex = string.indexOf(startCharacter);
const endIndex = string.indexOf(endCharacter);

const result = startIndex === 0 && endIndex ===  string.length - 1;
// console.log(result);

