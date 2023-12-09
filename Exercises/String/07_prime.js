// //JavaScript Program to Check if a Number is a Prime Number

var num = 9;
if (num <= 1) {
  console.log("Not prime number");
} else {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    // Check if num is divisible by the current value of i
    if (num % i === 0) {
      // If a divisor is found, set isPrime to false and exit the loop
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("Prime number");
  } else {
    console.log("Not prime number");
  }
}
