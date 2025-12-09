/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
    let count = 0;
    const MOD = 1e9 + 7;

    let leftMap = new Map();
    leftMap.set(nums[0], 1);

    let rightMap = new Map();
    for (let i = 2; i < nums.length; i++) {
        rightMap.set(nums[i], (rightMap.get(nums[i]) || 0) + 1);
    }

    for (let j = 1; j < nums.length - 1; j++) {

        let x = nums[j];
        let target = x * 2;

        if (leftMap.has(target) && rightMap.has(target)) {
            let leftCount = leftMap.get(target);
            let rightCount = rightMap.get(target);

            count = (count + (leftCount * rightCount) % MOD) % MOD;
        }

        // Move current j to left side
        leftMap.set(x, (leftMap.get(x) || 0) + 1);

        // Remove nums[j+1] from right side
        let nextVal = nums[j + 1];
        rightMap.set(nextVal, rightMap.get(nextVal) - 1);

        if (rightMap.get(nextVal) === 0) {
            rightMap.delete(nextVal);
        }
    }

    return count;
};

//brute force method
    // let count =0;
    // for(let i=0; i<nums.length-2; i++){
    //     for(let j=i+1; j<nums.length-1; j++){
    //         for(let k=j+1; k<nums.length; k++){
    //             if(nums[i]===(nums[j]*2) && nums[k]==(nums[j]*2)){
    //                 count++;
    //             }
    //         }
    //     }
    // }

    // return count;