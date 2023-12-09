var str1 = "hello world";
var reverseStr1 = str1.split("").reverse().join("");
// console.log(reverseStr1);

var rvrStr = "";
var lastChar = str1.length - 1;
console.log(lastChar);

for (var i = lastChar; i >= 0; i--) {
  rvrStr = rvrStr + str1[i];
  console.log(rvrStr);
}
