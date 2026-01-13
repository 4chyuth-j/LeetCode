/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let size = candyType.length/2;
    let set = new Set(candyType);
    

    return Math.min(set.size,size);
};