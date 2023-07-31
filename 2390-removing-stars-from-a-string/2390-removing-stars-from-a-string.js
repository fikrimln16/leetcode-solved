/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = []

    s.split("").forEach((element) => {
        if(element != "*"){
            stack.push(element)
        } else {
            stack.pop()
        }
    })

    return stack.join("")
};