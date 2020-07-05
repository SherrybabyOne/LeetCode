function Add(num1, num2) {
  while (num2 !== 0) {
    const sum = num1 ^ num2;
    const carry = (num1 & num2) << 1;
    num1 = sum;
    num2 = carry;
  }
  return num1;
}
