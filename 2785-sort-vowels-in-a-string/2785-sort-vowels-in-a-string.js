/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const vowel = "AEIOUaeiou";
  let vowels = "";

  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      vowels += s[i];
    }
  }

  vowels = vowels.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).join("");

  let result = "";

  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i])) {
      result += vowels[j];
      j++;
    } else {
      result += s[i];
    }
  }

  return result;
};