/**
 * @param {number} n
 * @return {boolean}
 */
var consecutiveSetBits = function(n) {
    let count = 0;
    let str = n.toString(2);
    for(let i=1; i<str.length; i++){
        if(str[i]==1 && str[i-1]==1){
            count++;
        }

        if(count>1) return false;
    }

    return count===1;
};