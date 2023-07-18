/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let find = 0;
  if (ruleKey === "type") find = 0;
  if (ruleKey === "color") find = 1;
  if (ruleKey === "name") find = 2;

  let arr = items.map((element) => {
    return element[find]
  }).filter((elemen) => elemen === ruleValue);

  return arr.length;
};