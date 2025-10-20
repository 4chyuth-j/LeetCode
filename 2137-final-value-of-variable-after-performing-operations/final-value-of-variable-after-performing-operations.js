/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res =0;
    for(let item of operations){
        if(item[0]=='+' || item[2]=='+'){
            res++;
        } else {
            res--;
        }
    }

    return res;
};