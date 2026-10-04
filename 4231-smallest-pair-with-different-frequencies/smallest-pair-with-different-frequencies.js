/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function(nums) {
    if(nums.length<=2) return [-1,-1];
    const freq = new Array(101).fill(0);

    for(let num of nums){
        freq[num]++;
    }

    let small = {value:-Infinity,count:0};

    for(let i=0; i<freq.length; i++){
        if(freq[i]>0 && i>small.value){
            small.value = i;
            small.count = freq[i];
            break
        }
    }

    let large = -Infinity;
    for(let i=small.value; i<freq.length; i++){
        if(freq[i]>0 && freq[i]!==small.count){
            large = i;
            break;
        }
    }

    return large===-Infinity?[-1,-1]:[small.value,large];


};