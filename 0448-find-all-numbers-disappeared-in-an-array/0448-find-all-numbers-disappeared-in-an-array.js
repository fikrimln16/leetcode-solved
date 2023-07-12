/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   let res = []

   let map = new Map()
   for (let i = 0; i < nums.length; i++) {
      const element = nums[i]
      map.set(element, (map.get(element) || 0) + 1)
   }
   for (let i = 1; i <= nums.length; i++) {
      if(!map.has(i)) res.push(i)
   }
   return res
};