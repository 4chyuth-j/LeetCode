/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let start = 0,end = letters.length-1;
    let res = letters[0];

    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(letters[mid]>target){
            res = letters[mid];
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return res;
};

