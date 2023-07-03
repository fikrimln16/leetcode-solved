/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let highest = 0;
  
  accounts.forEach((account) => {
    let sum = account.reduce((x,y) => {
      return x + y
    }, 0);
    if ( highest < sum ) highest = sum;
  })

  return highest;
};