/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res =0;
    for(let item of operations){
        if(item=='++X' || item=='X++'){
            res++;
        } else {
            res--;
        }
    }

    return res;
};