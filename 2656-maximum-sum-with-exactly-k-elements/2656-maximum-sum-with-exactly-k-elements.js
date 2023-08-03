/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let max = -Infinity
  let sum = 0
  for(let i = 0; i < k; i++){
    max = Math.max(...nums)
    sum += max
    nums.push(max + 1)
  }

  return sum
};