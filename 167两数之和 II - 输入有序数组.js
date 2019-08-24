/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // for(let i = 0; i < numbers.length - 1; i++) {
    //     for(let j = i + 1; j < numbers.length; j++) {
    //         if(numbers[i] + numbers[j] === target) return [i+1,j+1];
    //     }
    // }
    // return []
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        let sum = numbers[i] + numbers[j];
        if(sum === target) return [i+1,j+1];
        else if (sum < target) i++
        else j--
    }
    return []
};