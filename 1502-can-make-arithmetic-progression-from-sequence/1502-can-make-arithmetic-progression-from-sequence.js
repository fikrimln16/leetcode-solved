/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let sorted = arr.sort((a,b) => a-b)
    let arimatika = true
    let op = sorted[1] - sorted[0]
    for(let i = 0; i < sorted.length - 1; i++){
        if(sorted[i] + op !== sorted[i+1]){
            arimatika = false
            break
        }
    }

    return arimatika
};