/**
 * @param {number} x
 * @return {boolean}
 */

//讲数组转化为字符串算法
// var isPalindrome = function(x) {
//     if(x<0){
//         return false;
//     }else{
//         let res = parseInt((x+'').split('').reverse().join(''))
//         if(res===x){
//             return true
//         }else {
//             return false
//         }
//     }
// };

//进阶算法
var isPalindrome = function(x) {
    if(x<0 || x%10==0&&x!=0){
        return false
    }
    var revertedNumber = 0;
    while(x>revertedNumber){
        revertedNumber = revertedNumber*10 + x%10;
        x = x/10>>0;
    }
    return x==revertedNumber || x == revertedNumber/10>>0;
}

console.log(isPalindrome(10))