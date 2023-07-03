/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0){
    return init
  }

  var temp = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    temp = fn(init,element)
    init = temp;
  }
  
  return temp;
}   ;