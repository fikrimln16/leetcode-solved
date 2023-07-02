/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
   const counter = {};
  const duplicates = [];

  nums.forEach(num => {
    counter[num] = (counter[num] || 0) + 1;
    if (counter[num] === 2) {
      duplicates.push(num);
    }
  });

  return duplicates;
};