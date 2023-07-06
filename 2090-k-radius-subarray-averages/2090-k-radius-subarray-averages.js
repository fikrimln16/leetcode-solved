/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
  if (k === 0) return nums;

  let arr = new Array(nums.length).fill(-1);

  for (let i = k; i < nums.length - k; i++) {
    let sum = 0;
    for (let j = i - k; j <= i + k; j++) {
      sum += nums[j];
    }
    let avg = Math.floor(sum / (2 * k + 1));
    arr[i] = avg;
  }

  return arr;
};