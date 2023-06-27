/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
 num = num.split("");
  for(let i = num.length - 1; i >= 0; i--){
      if(num[i] % 2 == 0){
          num.pop();
      } else {
          break;
      }
  }
  return num.join("");
};