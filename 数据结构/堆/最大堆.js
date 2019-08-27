class MaxHeap {
    constructor () {
        this.heap = [];
    }
    size () {
        return this.heap.length;
    }
    empty () {
        return this.size() === 0;
    }
    // 添加元素
    add (item) {
        this.heap.push(item);
        this._shiftUp(this.size() - 1);
    }
    // 删除根节点
    removeMax () {
        this._shiftDown(0);
    }
    getParentIndex (k) {
        return parseInt((k-1)/2);
    }
    getLeftIndex (k) {
        return k * 2 + 1;
    }
    _shiftUp (k) {
        while (this.heap[k] > this.heap[this.getParentIndex(k)]) {
            this._swap(k,this.getParentIndex(k));
            k = this.getParentIndex(k);
        }
    }
    _shiftDown (k) {
        // 交换首末并删除末尾
        this._swap(k,this.size() - 1);
        this.heap.splice(this.size() - 1,1);
        // 判断节点是否有左孩子，因为二叉堆的特性，有右必有左
        while (this.getLeftIndex(k) < this.size()) {
            let j = this.getLeftIndex(k);
            // 判断是否有右孩子，并且右孩子是否大雨左孩子
            if (j + 1 < this.size() && this.heap[j + 1] > this.heap[j]) j++;
            // 判断父节点是否已经比子节点都大
            if (this.heap[k] > this.heap[j]) break;
            this._swap(k,j);
            k = j;
        }
    }
    _swap (left,right) {
        [this.heap[left],this.heap[right]] = [this.heap[right],this.heap[left]];
    }
}