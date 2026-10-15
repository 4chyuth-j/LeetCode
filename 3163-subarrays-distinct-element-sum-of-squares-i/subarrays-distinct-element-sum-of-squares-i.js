/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let sumOfSquare = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(i===j){
               sumOfSquare+=1;
            } else {
                let set = new Set(nums.slice(i,j+1));
                sumOfSquare+=(set.size**2);
            }
        }
    }

    return sumOfSquare;
};