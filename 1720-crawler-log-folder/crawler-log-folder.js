/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let count = 0;
    for(let ops of logs){
        if(ops=='../'){
            if(count>0){
                count--;
            }
        } else if(ops==='./'){
            continue;
        } else {
            count++;
        }
    }

    return count;
};