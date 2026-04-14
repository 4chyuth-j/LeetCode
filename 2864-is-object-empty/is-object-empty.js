/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let flag = true;
    for(let key in obj){
        flag = false;
    }

    return flag;
};