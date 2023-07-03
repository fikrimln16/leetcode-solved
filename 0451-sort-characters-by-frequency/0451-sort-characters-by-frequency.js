/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
   let map = new Map()
   let res = []
   for (let i = 0; i < s.length; i++) {
      const element = s[i];
      map.set(element, (map.get(element) || 0) + 1)
   }

   const result = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
   
   for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i][1]; j++) {
         res.push(result[i][0])
      }
   }

   return res.join("") 
};