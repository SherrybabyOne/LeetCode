/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i<flowerbed.length; i++) {
        if(
            flowerbed[i]===0
            && (flowerbed[i-1]===0||i===0)
            && (flowerbed[i+1]===0||i+1===flowerbed.length)
        ){
            n--;
            flowerbed[i] = 1;
        }
    }
    return n<=0
};