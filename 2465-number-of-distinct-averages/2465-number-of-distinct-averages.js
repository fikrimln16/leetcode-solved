/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
   
   let sorted = nums.sort((a, b) => a-b)
   let set = new Set()
   while(sorted.length !== 0){
      let avg = (sorted[0] + sorted[sorted.length-1]) / 2
      set.add(avg)
      sorted.shift()
      sorted.pop()
   }

   return set.size

};