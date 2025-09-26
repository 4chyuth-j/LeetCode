/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let res = '';
    for(let c of s){
        if(c ==='i'){
            res = faultyReverse(res);
        } else {
            res+=c;
        }
    }

    return res;
};

function faultyReverse(str){
    let arr = str.split("");
    let start =0, end = arr.length-1;
    while(start<=end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
    return arr.join('');
}