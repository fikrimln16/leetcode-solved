/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, array) {
  const n = array.length;
  let minLength = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < n; right++) {
    sum += array[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= array[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};