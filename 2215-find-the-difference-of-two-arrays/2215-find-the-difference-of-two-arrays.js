/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)

    for (let item of nums1){
        if (nums2.has(item)) {
            nums1.delete(item)
            nums2.delete(item)
        }
    }
    return [Array.from(nums1),Array.from(nums2)]
   
};