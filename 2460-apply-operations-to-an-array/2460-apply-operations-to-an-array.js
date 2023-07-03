/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let result = []
  let zero = []
  
  let temp = nums
  for (let index = 0; index < nums.length; index++) {
    const first = nums[index];
    const second = nums[index + 1]
    if(first === second){
      temp[index] = nums[index] * 2
      temp[index+1] = 0
    }
  }
  
  for (let index = 0; index < temp.length; index++) {
    const element = nums[index];
    if(element !== 0){
      result.push(element)
    } else {
      zero.push(element)    
    }
  }

  return result.concat(zero)
};