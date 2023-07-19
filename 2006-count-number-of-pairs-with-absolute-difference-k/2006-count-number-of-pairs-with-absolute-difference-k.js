/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
   
   let count = 0
   for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      for (let j = 0; j < nums.length; j++) {
         const diff = nums[j];
         if(diff === element + k) count++
      }
   }
   return count
};