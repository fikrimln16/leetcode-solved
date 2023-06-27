/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
    let i=0
    let j=i+1
    let count=0
    nums.sort()
    while(i<j){
        if(nums[i]===nums[j]){
            count++;
            j++
        }
        else{
            i++
            j=i+1
            if(nums[j]===undefined)
                {
                    return count
                }
        }
    }
    return count
};