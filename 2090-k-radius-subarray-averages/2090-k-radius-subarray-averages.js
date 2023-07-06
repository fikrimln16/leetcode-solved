/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    
  const prefixSum = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixSum[i] = nums[i];
    } else {
      prefixSum[i] = nums[i] + prefixSum[i - 1];
    }
  }
  console.log(prefixSum) // [7,11,14,23,24,32,37,39,45]
  
  const res = new Array(nums.length).fill(-1);
  for (let i = k ; i <= (nums.length - 1) - k; i++) {
      if (i === k) {
          res[i] = Math.floor(prefixSum[i + k] / (k*2+1));
      } else {
          res[i] = Math.floor((prefixSum[i + k] - prefixSum[i - k - 1]) / (k*2+1));
      }
  }
  return res;
};