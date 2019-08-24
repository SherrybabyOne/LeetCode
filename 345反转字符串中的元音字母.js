/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let aList = ['a','e','i','o','u','A','E','I','O','U'];
    let i = 0;
    let j = s.length - 1;
    let arr = s.split('');
    while (i <= j) {
        if (aList.indexOf(arr[i]) === -1) i++
        else if (aList.indexOf(arr[j]) === -1) j--
        else {
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }
    }
    return arr.join('');
};