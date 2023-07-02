/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
   const vocal = ["a", "i", "u", "e", "o"];
   let res = 0;
   
   for (let i = left; i <= right; i++) {
     const element = words[i];
     if (vocal.includes(element[0]) && vocal.includes(element[element.length-1])) {
       res++;
     }   
   }
   
   return res;
};