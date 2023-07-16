/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
  //melalukan rumus prefix sum
  let prefixSum = [];
  prefixSum[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i-1] + nums[i]
  }


  //melakukan perulangan sampai mendapatkan value yang sama
  for (let i = 0; i < nums.length; i++) {
    let a = prefixSum[i-1];
    if(!a) a=0
    let b = prefixSum[nums.length - 1] - prefixSum[i+1-1]

    //jika a dan b sama, maka return index nya
    if(a==b) return i
  }

  //kembalikan -1 jika tidak ada yang sama di perulangan sblmnya
  return -1;
};