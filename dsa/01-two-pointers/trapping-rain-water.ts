/**
 * 42. Trapping Rain Water (LeetCode Hard)
 * Pattern: Two Pointers / Prefix Max
 * Time Complexity: O(n), Space Complexity: O(1)
 */

var trap = function (height: number[]): number {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let totalWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      // left side
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      // right side
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }
  return totalWater;
};
