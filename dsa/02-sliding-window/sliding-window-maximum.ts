/**
 * 239. Sliding Window Maximum (LeetCode Hard)
 * Pattern: Monotonic Deque
 * Time Complexity: O(n), Space Complexity: O(k)
 */

var maxSlidingWindow = function (nums: number[], k: number): number[] {
  const deque: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }
  return result;
};

export default maxSlidingWindow;
