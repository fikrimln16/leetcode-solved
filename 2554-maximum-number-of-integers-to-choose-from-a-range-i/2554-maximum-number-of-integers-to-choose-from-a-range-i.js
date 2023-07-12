/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  let sum = 0, count = 0;

  let set = new Set(banned)
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      //jika maxsum masih lebih besar dari currentsum
      if(maxSum >= sum+i){
        //tambahkan currentsum dengan indeks
        sum += i
        //tambahkan count untuk result
        count++
      }
    }
  }

  return count;
};