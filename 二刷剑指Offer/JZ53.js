//s字符串
function isNumeric(s) {
  // write code here
  var arr = s.split('');
  var point = false; //记录小数点是否出现过
  var symbol = false; //记录符号是否出现过
  var eOrE = false; //记录e或者E是否出现过
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] == 'e' || arr[i] == 'E') {
          //e后面要有数字，不能为空
          if (i == arr.length - 1) {
              return false;
          }
          //表示出现过
          if (eOrE) {
              return false;
          }
          eOrE = true;

      } else if (arr[i] == '.') {
          //不能在e后面出现,且不能出现两次
          if(eOrE || point) {
              return false
          }
          point = true; //表示出现过
      } else if (arr[i] == '+' || arr[i] == '-') {
          //若出现两次+-, 一定在e后面第一个数
          if (!((eOrE && (arr[i - 1] == 'e' || arr[i - 1] == 'E')) || i==0)) {
              return false;
          }
      } else if (arr[i] < '0' || arr[i] > '9') {
          return false;
      }
  }
  return true;
}