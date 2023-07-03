/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let total = mat.length
  
  let primaryDiagonal = 0
  let secondaryDiagonal = 0
  for (let i = 0; i < total; i++) {
    const element = mat[i][i];
    primaryDiagonal = primaryDiagonal + element
  }

  if(total % 2 === 1){
    let temp = total
    for (let j = 0; j < total; j++) {
      const element = mat[j][temp-1];
      element
      if(j !== temp-1){
        secondaryDiagonal = secondaryDiagonal + element
      }
      temp--
    } 
  } else {
    let temp = total
    for (let j = 0; j < total; j++) {
      const element = mat[j][temp-1];
      temp--
      secondaryDiagonal = secondaryDiagonal + element
    } 
  }

  return primaryDiagonal + secondaryDiagonal
};