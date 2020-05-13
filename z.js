const cache = [1, 3,];

function a() {
  return (cache[2] = 5);
}
let aaa;

console.log(
  a(),
  aaa = 'aaaaaa',
)