/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0) return 0;
    let start = 1, end = x;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(mid*mid == x) return mid;
        if(mid*mid>x){
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return end;
};