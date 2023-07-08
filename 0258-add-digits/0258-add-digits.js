/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  if (num === 0) {
    return 0;
  }
  
  while (num >= 10) {
    let digitSum = 0;
    
    while (num > 0) {
      let temp = num % 10
      digitSum += temp;
      num = Math.floor(num / 10);
    }
    
    num = digitSum;
  }
  
  return num;
};