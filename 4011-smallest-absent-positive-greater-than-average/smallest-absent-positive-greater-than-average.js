/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let seen = new Set(nums);
    let sum = nums.reduce((acc,red)=>acc+red,0);
    let avg = null;

    if(sum%nums.length===0){
      avg = Math.ceil(sum/nums.length)+1;
    } else {
      avg = Math.ceil(sum/nums.length)  
    }

    if(avg<=0){
        avg = 1;
    }
    
    while(seen.has(avg)){
        avg+=1;
    }

    return avg;

};