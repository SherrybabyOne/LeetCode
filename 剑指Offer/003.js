let duplicate = (arr) => {
  if(!arr) return false;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 0 || arr[i] >= arr.length) return false;
  }
  for(let i = 0; i < arr.length; i++) {
    while(arr[i] !== i) {
      if(arr[i] === arr[arr[i]]) {
        return true;
      }
      let temp = arr[i];
      arr[i] = arr[temp];
      arr[temp] = temp;
    }
  }
  return false;
}

console.log(
  duplicate([2,3,4,5,4,3,6,7])
)
