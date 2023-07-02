/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let res = []

   for (let i = 1; i <= A.length; i++) {
      let a = A.slice(0, i)
      let b = B.slice(0, i)
      let arr = a.concat(b)
      let map = new Map()
      
      let temp = 0
      arr.forEach((element) => {
         map.set(element, (map.get(element) || 0) + 1)
         if (map.get(element) > 1) {
            temp++
         }
      })
      res.push(temp)
   }

   return res 
};