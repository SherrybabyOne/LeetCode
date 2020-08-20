/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {
  const len = str.length;
  let i = 0;
  let j = len - 1;
  while (i <= j) {
    while (!compare(str[i]) && i < len) i++;
    while (!compare(str[j]) && j > 0) j--;
    if (i <= j && str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
const compare = str => {
  return (str >= 'A' && str <= 'Z') || (str >= 'a' && str <= 'z') || (str >= '0' && str <= '9')
}
