//Init module if you need
let map={}
function Init()
{
    map={}
    // write code here
}
//Insert one char from stringstream
function Insert(ch)
{
    map[ch]=map[ch]?map[ch]+1:1
    // write code here
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for(const i in map){
        if(map[i]===1){
            return i
        }
    }
    return '#'
    // write code here
}