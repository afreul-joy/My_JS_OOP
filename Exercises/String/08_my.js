var n = [1, 2, 3, 4];

for (var i = 0; i < n.length; i++) {
  var setPrime = true;
  if (n[i] <= 1) {
    console.log(n[i] + " is Not prime");
  } else {
    for (var j = 2; j < n[i]; j++) {
      if (n[i] % j === 0) {
        setPrime = false;
        break;
      }
    }
    if (setPrime) {
      console.log(n[i] + " is Prime");
    } else {
      console.log(n[i] + " is Not prime");
    }
  }
}
