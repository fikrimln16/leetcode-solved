/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
  let sorted = nums.sort((a,b) => a-b)
  let indexs = []
  sorted.map((element, index) => {
    if(element === target){
      indexs.push(index)
    }
  })
  
  return indexs
};