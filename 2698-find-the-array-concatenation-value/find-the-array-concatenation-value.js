/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let res = 0;
    let s=0,e=nums.length-1;

    while(s<=e){
        if(s==e){
            res+=nums[s];
            break;
        }

        let con = String(nums[s])+String(nums[e]);
        res+=Number(con);
        s++;
        e--;
    }

    return res;
};