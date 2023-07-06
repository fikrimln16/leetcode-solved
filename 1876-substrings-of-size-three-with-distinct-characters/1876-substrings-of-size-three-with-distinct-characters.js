/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  return Array.from({ length: s.length - 2 }, (_, l) => new Set(`${s[l]}${s[l + 1]}${s[l + 2]}`).size === 3).filter(Boolean).length;
};