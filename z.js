const a = [2,2,2,2];
const b = 2;
console.log(
    a.every(elm => {
        return !(elm%b !== 0)
    })
)