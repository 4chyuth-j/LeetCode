/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let count = 0;
    let thres = 1000;
    while(thres<=n){
        count+= n - thres + 1;
        thres*=1000;
    }

    return count;
};