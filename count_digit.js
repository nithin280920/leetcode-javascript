// Count digit

function countDigit(n) {
  let count = 0;
  if (n == 0) return 1;

  // Math.abs Handel negative Numbers
  n = Math.abs(n);

  while (n > 0) {
    // Math.floor Removes the decimal after the number
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigit(0));
console.log(countDigit(854698));
console.log(countDigit(-4698));
