/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function(items, queries) {
   items.sort((a, b) => a[0] - b[0]);
   const n = items.length;

   let max = items[0][1];

   for (let i = 0; i < n; i++) {
      max = Math.max(max, items[i][1]);
      items[i][1] = max;
   }

   //metode binarySearch
   const binarySearch = (arr, target) => {
      let left = 0;
      let right = arr.length - 1;
      let result = 0;
      while (left <= right) {
         let mid = Math.floor((left + right) / 2);
         if (arr[mid][0] <= target) {
            result = arr[mid][1];
            left = mid + 1;
         } else {
            right = mid - 1;
         }
      }
      return result;
   };

   const ans = [];
   queries.forEach(element => ans.push(binarySearch(items, element)))
   
   return ans;
};