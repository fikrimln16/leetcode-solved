/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function getNext(n) {
        let totalSum = 0;
        while (n > 0) {
          let d = n % 10;
          n = Math.floor(n / 10);
          totalSum += d * d;
        }
        return totalSum;
      }

      let seen = new Set();
      while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
      }
      return n === 1;
};