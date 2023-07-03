/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let array2 = []
  nums.forEach(element => {
    array2.push(element)
  });
  
  let result = nums.concat(array2)
  return result
};