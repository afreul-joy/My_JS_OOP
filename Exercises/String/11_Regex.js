// [aeiou] = expression and /gi = modifier, means g=global and i =  ignore case sensitivity

// const string = "hello world";
// const reg = /[aeiou]/gi;
// var test = string.match(reg);

// console.log(test);

// const string = "hello world";
// const character = "l";

// var counter = 0;

// for (let i = 0; i < string.length; i++) {
//   if (string[i] == character) {
//     counter++;
//   }
// }
// console.log(counter);

// const string = "hello world madam";
// var reverse = "";
// for (let i = string.length - 1; i > 0; i--) {
//   reverse = reverse + string[i];
// }
// console.log(reverse);

// const string = "d b c a A B a C";
// // split convert array join again back to string
// const split = string.split(' ').sort().join(' ').trim()
// console.log(split);

// const arr = [324,2,4654, 3];
// const sorted = arr.sort()
// console.log(arr);

// function rec(num) {
//   if (num <= 0) {
//     return 0;
//   } else {
//     return num + rec(num - 1);
//   }
// }
// const result = rec(20);
// console.log(result);

// function fac(num) {
//   for (let i = 0; i <= num; i++) {
//     if (num % i == 0) {
//       console.log(i);
//     }
//   }
// }

// fac(10)

// var num = 153;
// var temp = num;
// var sum = 0;

// while (temp > 0) {
//   var digit = temp % 10;
//   sum = sum + digit * digit * digit;
//   temp = parseInt(temp / 10);
// }
// if(sum == num) {
//     console.log("Armstrong Number", num);
// } else {
//     console.log("not armstrong", num);
// }

var a = 0;
var b = 1;

for (var i = 0; i <= 10; i++) {
  var temp = a + b;
  console.log(temp);
  a = b;
  b = temp;

}
