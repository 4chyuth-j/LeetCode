/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let size = candyType.length/2;
    let set = new Set(candyType);
    console.log(set,size);

    if(size>set.size){
        return set.size;
    } else if(set.size>=size){
        return size;
    }
};