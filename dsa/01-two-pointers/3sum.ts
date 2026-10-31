/**
 * 15. 3Sum (LeetCode Medium)
 * Pattern: Sorting + Two Pointers
 * Time Complexity: O(n^2), Space Complexity: O(1) or O(n)
 */

var threeSum = function (nums: number[]): number[][] {
  const results: number[][] = [];

  // Step 1: Sort the array in ascending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Step 2: Skip duplicate first elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Step 3: Initialize two pointers
    let left = i + 1;
    let right = nums.length - 1;

    // Step 4: Search for the remaining two numbers
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        // Skip duplicate left values
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // Skip duplicate right values
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        // Sum is too small: increase it
        left++;
      } else {
        // Sum is too large: decrease it
        right--;
      }
    }
  }

  return results;
};

export default threeSum;
