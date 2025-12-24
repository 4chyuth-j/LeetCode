/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let totalApple = apple.reduce((curr,item)=>curr+item,0);
    capacity.sort((a,b)=>b-a);
    let res = 0;
    while(totalApple>0){
        totalApple-=capacity[res++];
    }
    return res;
};