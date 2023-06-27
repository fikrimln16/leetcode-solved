/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sums = 0;
    let retSums = [];
    for(let i of nums) {
        sums += i;
        retSums.push(sums);
    }
    return retSums;
}