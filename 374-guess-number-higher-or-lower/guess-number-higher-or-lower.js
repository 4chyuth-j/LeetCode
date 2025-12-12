/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {

    return findNum(1,n);
    
};

function findNum(start=1,end){
    let mid = Math.floor((start+end)/2);
    let num = guess(mid);
    if(num==0){
        return mid;
    } else if(num==-1){
        return findNum(start,mid-1);
    } else {
        return findNum(mid+1,end);
    }
}