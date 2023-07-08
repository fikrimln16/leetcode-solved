/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
   while (s.length > k) {
     let current = '';
     for (let i = 0; i < s.length; i += k) {
       let chunk = s.slice(i, i + k);
       let sum = chunk.split('').reduce((a, b) => parseInt(a) + parseInt(b));
       current += sum;
     }
     s = current;
   }
   return s;
 };