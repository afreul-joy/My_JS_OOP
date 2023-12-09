// const n = Math.max(10,20,30,1)
// console.log(n);

function num(x, y, z) {
  if (x > y && x > z) {
    console.log("X  larger than", x, y, z);
  } else if (y > x && y > z) {
    console.log("Y larger than", x, y, z);
  } else {
    console.log("Z larger than", x, y, z);
  }
}
// num(12, 16, 20)