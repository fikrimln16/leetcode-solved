function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}


var reverseString = function(s) {
    let i = 0
    let j = s.length - 1

    while(i < j){
        swap(s, i, j)
        i++
        j--
    }

    if(i === j){
        s[i] = s[j]
    }
};