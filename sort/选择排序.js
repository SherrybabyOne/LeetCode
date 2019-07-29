var selectSort = function(arr) {
    for(let i = 0; i<arr.length; i++) {
        let min = arr[i];
        for(let j = i+1; j<arr.length; j++) {
            if(min > arr[j]) [arr[j],min] = [min,arr[j]]
        }
        arr[i] = min;
    }
    return arr;
}

console.log(selectSort([2,6,1,8,5]))