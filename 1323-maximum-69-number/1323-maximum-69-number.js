/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let curMax = num;

  let length = num.toString().split("").length

  for (let i = 0; i < length; i++) {
    let temp = num.toString().split("")
    if(temp[i] === "6") {
      temp[i] = '9'
    } else {
      temp[i] = '6'
    }  
    
    curMax = Math.max(curMax, temp.join(""))
  }

  return curMax
};