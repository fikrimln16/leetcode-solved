/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
   let ans = []
  for (let i = 1; i <= n; i++) {
    if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
      ans.push(i)
    }
  }

  ans
  
  let sum = ans.reduce((cur, num) => {
    return cur + num
  }, 0)

  return sum;
};