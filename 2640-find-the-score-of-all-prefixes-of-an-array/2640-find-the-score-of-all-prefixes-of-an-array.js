/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function (nums) {
  let res = [];
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
    sum += nums[i] + max;
    res.push(sum);
  }

  return res;
};