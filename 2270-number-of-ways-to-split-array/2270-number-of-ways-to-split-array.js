/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
   
   let prefixSum = []
   prefixSum[0] = nums[0]
   for (let i = 1; i < nums.length; i++) {
      prefixSum[i] = prefixSum[i-1] + nums[i]
   }

   let count = 0
   for (let i = 0; i < nums.length - 1; i++) {
      const left = prefixSum[i];
      const right = prefixSum[nums.length - 1] - prefixSum[i+1-1]
      if(left>=right) count++
   }

   return count

};