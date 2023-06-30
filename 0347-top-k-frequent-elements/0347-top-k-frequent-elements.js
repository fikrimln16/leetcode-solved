/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (const num of nums) {
      map.set(num, (map.get(num) || 0) + 1);
    }

    const result = Array.from(map.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map(([key]) => key);

    return result;
};