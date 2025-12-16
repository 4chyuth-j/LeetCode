/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num<2) return true;
    let left = 2, right = Math.floor(num/2);
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        const squred = mid*mid;
        if(squred==num) return true;
        else if (squred<num){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }

    return false;
};