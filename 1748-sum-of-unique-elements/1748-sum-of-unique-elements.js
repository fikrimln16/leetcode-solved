/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   let map = new Map()
   let res = 0
   nums.forEach((element) => {
      map.set(element, (map.get(element) || 0) + 1)
   })
   map.forEach((key, value) => {
      if(key == 1){
         res += value
      }
   })
   return res 
};