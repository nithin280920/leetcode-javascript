// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

const reverInt = (x) => {
    let copyOfX = x
    let reversNum = 0;
    x = Math.abs(x)
    while(x > 0){
        let lastDigit = x % 10;
        reversNum = (10*reversNum) + lastDigit
        x = Math.floor(x / 10);
    }
    let limit = Math.pow(2,31);
    if( reversNum < -limit || reversNum > limit) return 0
    return (copyOfX > 0) ? reversNum : -reversNum;
}


console.log(reverInt(1534236469))