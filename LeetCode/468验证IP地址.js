/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if (IP.indexOf('.') !== -1) return validIPV4(IP);
  else if (IP.indexOf(':') !== -1) return validTPV6(IP);
  else return 'Neither';
};
function validIPV4(IP) {
  const nums = IP.split('.');
  if (nums.length !== 4) return 'Neither';
  for (let i = 0; i < 4; i++) {
    const num = nums[i];
    if (!num) return 'Neither';
    if (num[0] === '0' && num.length > 1) return 'Neither';
    for (let j = 0; j < num.length; j++) {
      const item = num[j];
      if (item >= '0' && item <= '9') continue;
      else return 'Neither';
    }
    if (parseInt(num) > 255) return 'Neither';
  }
  return 'IPv4';
}
function validTPV6(IP) {
  const nums = IP.split(':');
  if (nums.length !== 8) return 'Neither';
  for (let i = 0; i < 8; i ++) {
    const num = nums[i];
    if (!num) return 'Neither';
    if (num.length > 4) return 'Neither';
    for (let j = 0; j < num.length; j++) {
      const item = num[j];
      if (
        (item >= 'a' && item <= 'f')
        || (item >= 'A' && item <= 'F')
        || (item >= '0' && item <= '9')
      ) continue;
      else return 'Neither';
    }
  }
  return 'IPv6';
}