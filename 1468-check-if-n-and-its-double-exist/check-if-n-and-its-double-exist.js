/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        map.set(arr[i]/2,i);
    }

    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i]) && map.get(arr[i])!=i) return true;
    }

    return false;
};