function replaceSpace(str) {
  if (!str) return str;
  return str.split('').map(item => {
    if (item === ' ') {
      return '%20';
    } else {
      return item;
    }
  }).join('')
}