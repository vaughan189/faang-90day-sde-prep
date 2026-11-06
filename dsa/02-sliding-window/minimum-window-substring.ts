/**
 * 76. Minimum Window Substring (LeetCode Hard)
 * Pattern: Sliding Window with Frequency Map
 * Time Complexity: O(m + n), Space Complexity: O(m + n)
 */

var minWindow = function (s: string, t: string): string {
  if (s.length === 0 || t.length === 0 || s.length < t.length) {
    return "";
  }

  const targetMap: Record<string, number> = {};
  for (const char of t) {
    targetMap[char] = (targetMap[char] || 0) + 1;
  }

  const required = Object.keys(targetMap).length;

  const windowMap: Record<string, number> = {};

  let formed = 0;

  let left = 0;
  let right = 0;

  let minLen = Infinity;
  let minLeft = 0;
  let minRight = 0;

  while (right < s.length) {
    const char = s[right];
    windowMap[char] = (windowMap[char] || 0) + 1;

    if (targetMap[char] && windowMap[char] === targetMap[char]) {
      formed++;
    }

    while (left <= right && formed === required) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minLeft = left;
        minRight = right;
      }

      const leftChar = s[left];
      windowMap[leftChar]--;

      if (targetMap[leftChar] && windowMap[leftChar] < targetMap[leftChar]) {
        formed--;
      }

      left++;
    }
    right++;
  }

  return minLen === Infinity ? "" : s.substring(minLeft, minRight + 1);
};

export default minWindow;
