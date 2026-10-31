/**
 * 11. Container With Most Water (LeetCode Medium)
 * Pattern: Two Pointers (Shrinking Window)
 * Time Complexity: O(n), Space Complexity: O(1)
 */

var maxArea = function (height: number[]) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentWater = width * currentHeight;
    maxWater = Math.max(maxWater, currentWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

export default maxArea;
