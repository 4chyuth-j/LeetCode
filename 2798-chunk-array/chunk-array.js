/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = [];
    let i = 0;
    while(i<arr.length){
        let chunk = [];
        let s = size;
        while(s>0 && i<arr.length){
            chunk.push(arr[i++]);
            s--;
        }
        res.push(chunk);
    }

    return res;
};
