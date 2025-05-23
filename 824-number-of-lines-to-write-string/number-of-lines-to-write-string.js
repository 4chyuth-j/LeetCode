/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let dictionary = [];
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  for (let i in alpha) {
    dictionary[i] = {
      str: alpha[i],
      pix: widths[i],
    }
  }

  let lineCount = 1;
  let lastWidth = 0;
  let sum = 0;
  let flagSum = 0;
  let flagCount = [];

  for (let i = 0; i < s.length; i++) {
    let dum = dictionary.find(item => item.str == s[i]);
    if (dum) {
      sum += dum.pix;
      flagSum += dum.pix;
    }
    if (flagSum > 100) {
      lineCount++;
      flagCount.push({ w: flagSum - dum.pix });
      sum-=dum.pix;
      i--;
      flagSum = 0;
    }
  }

  let dummy = 0;
  for (let item of flagCount) {
    dummy += item.w;
  }

  lastWidth = sum - dummy;

  return [lineCount, lastWidth];
};