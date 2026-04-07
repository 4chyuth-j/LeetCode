/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = [];
    nums.sort((a,b)=>b-a);

    while(nums.length!=0){
        let elem1 = nums.pop();
        let elem2 = nums.pop();
        if(elem1>elem2){
            arr.push(elem1);
            arr.push(elem2);
        } else {
            arr.push(elem2);
            arr.push(elem1);
        }
    }

    return arr;
};