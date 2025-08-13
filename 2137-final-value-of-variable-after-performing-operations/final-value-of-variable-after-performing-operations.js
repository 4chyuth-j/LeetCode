/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res =0;
    for(let item of operations){
        if(item.includes('+')){
            res++;
        } else {
            res--;
        }
    }

    return res;
};