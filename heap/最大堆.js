class Heap {
    constructor (data) {
        this.data = data;
    }
    sort () {
        let iArr = this.data;
        let n = iArr.length;
        if(n <= 1) return iArr;
        else {
            for(let i = Math.floor(n/2); i>=0; i--) {
                Heap.maxHeapify(iArr, i, n-1);
            }
            for(let j = 0; j< n; j++) {
                Heap.swap(iArr, 0, n-1-j);
                Heap.maxHeapify(iArr, 0, n-1-j-1);
            }
        }
        return iArr;
    }
    static swap (arr,a,b) {
        if(a === b) return ''
        else [arr[a],arr[b]] = [arr[b],arr[a]];
    }
    // 构造最大堆的过程
    static maxHeapify (Arr, i, size) {
        // 左节点索引
        let l = i * 2 + 1;
        // 右节点索引
        let r = i * 2 + 2;
        let largest = i;
        if(l <= size && Arr[l] > Arr[largest]) {
            largest = l;
        }
        if(r <= size && Arr[r] > Arr[largest]) {
            largest = r;
        }
        if(largest !== i) {
            this.swap(Arr, i, largest);
            this.maxHeapify(Arr, largest,size);
        }
    }
}

let a = new Heap([4,1,3,2]).sort();
console.log(a)