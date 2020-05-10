var reverse = function(x) {
    let fn = '',re;
    if(x<0){
        fn= '-';
        x = 0 - x;
    }
    re = (x+'').split('').reverse().join('');
    if(re> (x>0?2147483647:2147483648)){
        return 0;
    }else {
        return parseInt(fn+re)
    }
};