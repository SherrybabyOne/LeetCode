function FindContinuousSequence(sum)
{
    // write code here
    let result = [],pre=1,next=2;
    while(pre < next) {
        const total = (pre+next)*(next-pre+1)/2;
        if(sum == total) {
            const list = [];
            for(let i =pre;i<=next;i++) {
                list.push(i)
            }
            result.push(list)
            pre++
        } else if(total < sum) {
            next++
        } else {
            pre++
        }
    }
    return result
}