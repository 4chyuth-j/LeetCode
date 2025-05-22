/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum =0;
    for(let i=0; i<arr.length; i+=2){
        for(let j=0; j<arr.length-i; j++){
            let dummy = arr.slice(j,j+i+1);
            console.log(dummy);
            for(let item of dummy){
                sum+=item;
            }
        }
    }
    return sum;
};