/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let start:number = 1; let end:number = n;

    while(start<=end){
        let mid:number = Math.floor((start+end)/2);
        let guessNum:number = guess(mid);
        if(guessNum==0) return mid;

        if(guessNum==-1){
           end = mid-1; 
        } else {
            start = mid+1;
        }
    }
};