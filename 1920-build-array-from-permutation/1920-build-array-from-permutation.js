/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let array = [];
    nums.forEach(element => {
        array.push(nums[element])
    });

    return array;
};