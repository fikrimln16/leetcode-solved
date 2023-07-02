/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let map = new Map();
   
   nums.forEach(element => {
      if(map.has(element) === false){
         let temp = 0
         map.set(element, temp+1)
      } else {
         let temp = map.get(element)
         map.set(element, temp+1)
      }
   });

   for (let index = 0; index < nums.length; index++) {
      if(map.get(nums[index])>1) return true
   }

   return false
};