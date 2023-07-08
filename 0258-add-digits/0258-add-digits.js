/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
   let result = Infinity;

   if (num === 0) return 0;

   while (true) {
     if (result < 10) return result;
     digVal = (num % 10) + Math.floor(num / 10); 
     result = digVal;
     result
     num = digVal;
   }
 };