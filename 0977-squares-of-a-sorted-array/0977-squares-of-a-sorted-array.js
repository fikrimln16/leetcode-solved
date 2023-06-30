/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = nums.map((number)=>{
        return Math.abs(number)**2
    }).sort((a,b) => a-b)
    return res
};