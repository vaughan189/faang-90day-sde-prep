/**
 * 125. Valid Palindrome (LeetCode Easy / Core Two-Pointer Pattern)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}

// var isPalindrome = function (s) {
//   const string = s;
//   const lowerCaseResult = s.toLowerCase(s);
//   const replaceAlphaResult = lowerCaseResult.replace(/[^A-Za-z0-9]/g, "");
//   const reverseString = replaceAlphaResult.split("").reverse().join("");
//   if (reverseString === replaceAlphaResult) return true;
//   else return false;
// };
