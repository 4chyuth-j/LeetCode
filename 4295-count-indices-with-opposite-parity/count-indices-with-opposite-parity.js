/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const n = nums.length;
    const res = [];
    const counter = {odd:0, even:0};

    for(let i=0; i<n; i++){
        if(nums[i]%2==0){
            counter.even+=1;
        } else {
            counter.odd+=1;
        }
    }

    for(let i=0; i<n; i++){
        const key = nums[i]%2===0?"even":"odd";
        const resKey = key=="even"?"odd":"even";
        if(counter[key]>0){
            counter[key]-=1;
        }
        res.push(counter[resKey]);
    }



    return res;
};