/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) === nums.length / 2) return num;
  }
};
