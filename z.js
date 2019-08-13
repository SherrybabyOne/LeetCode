// function heap (str) {
//     let map = new Map();
//     str.split('').forEach(element => {
//         if(map.has(element)) {
//             map.set(element,map.get(element) + 1)
//         } else {
//             map.set(element,1)
//         }
//     });
//     this.map = map;
//     this.data = Array.from(map.values())
//     function sort () {
//         let iArr = this.data;
//         let n = iArr.length;
//         if(n <= 1) return iArr;
//         else {
//             for(let i = Math.floor(n/2); i>=0; i--) {
//                 Heap.maxHeapify(iArr, i, n-1);
//             }
//             for(let j = 0; j< n; j++) {
//                 Heap.swap(iArr, 0, n-1-j);
//                 Heap.maxHeapify(iArr, 0, n-1-j-1);
//             }
//         }
//         return iArr;
//     }
//     function toString () {
//         let arr = this.sort();
//         let str = [];
//         while (arr.length) {
//             let top = arr.pop();
//             for(let [k,v] of this.map) {
//                 if(v === top) {
//                     str.push(k.repeat(v));
//                     this.map.delete(k);
//                     break
//                 }
//             }
//         }
//         return str.join('')
//     }
//     function  swap (arr,a,b) {
//         if(a === b) return ''
//         else [arr[a],arr[b]] = [arr[b],arr[a]];
//     }
//     // 构造最大堆的过程
//     function maxHeapify (Arr, i, size) {
//         // 左节点索引
//         let l = i * 2 + 1;
//         // 右节点索引
//         let r = i * 2 + 2;
//         let largest = i;
//         if(l <= size && Arr[l] > Arr[largest]) {
//             largest = l;
//         }
//         if(r <= size && Arr[r] > Arr[largest]) {
//             largest = r;
//         }
//         if(largest !== i) {
//             this.swap(Arr, i, largest);
//             this.maxHeapify(Arr, largest,size);
//         }
//     }
//     return heap('caae').toString()
// }

const a = 'a'
let b = [a];
console.log(b)