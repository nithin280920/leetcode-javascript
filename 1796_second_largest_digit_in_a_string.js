// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example 1:

// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:

// Input: s = "abc11121"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit.

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters and digits.

const secondHighest = function (s) {
  let max = -1;
  let secondMax = -1;
  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      let num = Number(ch);
      if (num > max) {
        secondMax = max;
        max = num;
      } else if (num > secondMax && num < max) {
        secondMax = num;
      }
    }
  }
  return secondMax;
};

console.log(secondHighest("abc1111"))