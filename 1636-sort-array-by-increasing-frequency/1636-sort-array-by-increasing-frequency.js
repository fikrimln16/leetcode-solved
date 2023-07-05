/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let res = []
   let map = new Map()
   nums.forEach((element) => {
      map.set(element, (map.get(element) || 0) + 1)
   })
   map

   let arr = Array.from([...map.entries()]).sort((a, b) => {
      // Mengurutkan berdasarkan nilai index 1
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      }
      // Jika nilai index 1 sama, mengurutkan berdasarkan nilai index 0
      return b[0] - a[0];
    });

   for(const [key, value] of arr){
      for (let i = 0; i < value; i++) {
         res.push(key)
      }
   }
   
   return res
};