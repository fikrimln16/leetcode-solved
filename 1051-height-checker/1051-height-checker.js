/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
   let res = 0   
   const sorted = [...heights].sort((a, b) => a - b);
   for (let i = 0; i < heights.length; i++) {
      if(heights[i] !== sorted[i]) res++
   }
   return res
};