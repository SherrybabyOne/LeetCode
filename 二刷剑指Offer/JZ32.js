function PrintMinNumber(numbers) {
  numbers.sort(campare);
  let res = '';
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
}
function campare(a, b) {
  const str1 = a + '' + b;
  const str2 = b + '' + a;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) > str2.charAt[i]) {
      return true;
    }
    if (str1.charAt(i) < str2.charAt(i)) {
      return false;
    }
    return true;
  }
}