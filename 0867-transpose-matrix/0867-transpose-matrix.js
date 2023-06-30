/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
   let res = []
   for (let i = 0; i < matrix[0].length; i++) {
      let temp = []
      for (let j = 0; j < matrix.length; j++) {
         let tranpose = matrix[j][i]
         temp.push(tranpose)
      }
      res.push(temp)
   }

   return res
};