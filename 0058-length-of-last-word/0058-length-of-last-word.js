/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let text = s.trim();
    const myArray = text.split(" ");
    let filter = myArray.filter((element) => {
        return element !== "";
    });

    return filter[filter.length - 1].length
};