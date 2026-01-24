// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

const reverseString = (s) => {
    let len = s.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        [s[i], s[len - 1- i]] = [s[len - 1 - i], s[i]];
    }
}

const arr = ["H","a","n","n","a","h"];
reverseString(arr);
console.log(arr);