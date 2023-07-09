/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.arr = [...nums]
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.arr.slice(left, right+1).reduce((a,b) => a + b)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */