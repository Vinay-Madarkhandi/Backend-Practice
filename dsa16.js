//Leetcode :https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

const { log } = require("console");

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let arr = Array.from(s);
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.pop([i]);
      arr.pop([j]);
    }
    i++;
    j++;
  }

  return arr;
};

log(removeDuplicates("abbaca"));
