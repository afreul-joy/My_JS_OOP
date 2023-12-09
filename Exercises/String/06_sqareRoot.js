const num = 64;
const sqrt = Math.sqrt(num);
// console.log(sqrt) // 8

// Calculate the Area of a Triangle
const base = 10;
const height = 20;

const area = (base * height) / 0.5;
// console.log(area)

// Swap Two Numbers Using temporary Variable
var a = 5;
var b = 6;
var temp = a; // 5
a = b; //6
b = temp; // 5

// console.log(`a: ${a}, b: ${b}, temp: ${temp}`);

//Swapping Without Temporary Variable
var a = 10;
var b = 20;

a = a + b;
b = a - b;
a = a - b;

// console.log(` a: ${a}, b: ${b} `);

var a = 3;
var b = 4;

var temp = a;
a = b;
b = temp;

// c = c + d;
// d = c- d;
// c = c - d;

//console.log(` c: ${a}, d: ${b}`);

// Convert kilometers to miles using JavaScript Function
const kl = 10;
const convertMiles = kl * 1.6;
const ml = 10;
const convertKl= ml * 0.6
// console.log(` Miles: ${convertMiles} and km: ${convertKl}`);

// Problem : JavaScript Program to Check if a number is Positive, Negative, or Zero
function numF(x) {
  if(x>0){
    console.log('positive');
  } else if (x <0) {
    console.log('Negative');
  }
  else {
    console.log('zero');
  }
}

// numF(0)

// Get a random number between a range
function numb2(x) {
    let numb = Math.floor(Math.random() * (200 - 100) + 100 )
    console.log(numb);
}
// numb2()
// Check if a Number is Odd or Even 
function number(x) {
  if(x % 2 ===0 ){
    console.log("EVEN");
  } else {
    console.log("ODD");
  }
}
// number(2)
const n = 11;
if (n ===1) {
  
}
// console.log(res);


