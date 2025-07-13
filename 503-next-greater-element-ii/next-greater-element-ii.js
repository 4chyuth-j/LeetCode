/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let st = [];
    let n = nums.length;
    let res = new Array(n).fill(-1);

    for(let i=2*n-1; i>=0; i--){
        while(st.length>0 && nums[st[st.length-1]]<=nums[i%n]){
            st.pop();
        }

        if(st.length==0){
            res[i%n] = -1;
        }
        else{
            res[i%n] = nums[st[st.length-1]];
        }

        st.push(i%n);
    }

    return res;
};