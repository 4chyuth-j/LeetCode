/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
     const positionMap = new Map();
    arr2.forEach((value, index) => {
        positionMap.set(value, index);
    });

    arr1.sort((a, b) => {
        const aIn = positionMap.has(a);
        const bIn = positionMap.has(b);

        if (aIn && bIn) {
            return positionMap.get(a) - positionMap.get(b); 
        } else if (aIn) {
            return -1; 
        } else if (bIn) {
            return 1; 
        } else {
            return a - b; 
        }
    });

    return arr1;
};