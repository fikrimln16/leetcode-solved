/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr=[]
    let obj={};
    for(let i=0;i<nums1.length;i++){
        if(obj[nums1[i]]==undefined){
            obj[nums1[i]]=1;
        }
    }
  
    for(let i=0;i<nums2.length;i++){
        if(obj[nums2[i]]==1){
            arr.push(nums2[i])
            obj[nums2[i]]=0;     
        }
    }
    return arr
};