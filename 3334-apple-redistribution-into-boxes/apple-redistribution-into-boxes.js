/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let totalApple = apple.reduce((curr,item)=>curr+item,0);
    capacity.sort((a,b)=>b-a);
    let res = 0;
    let cap = 0;
    for(let i=0; i<capacity.length; i++){

        cap+=capacity[i];
        res++;

        if(cap>=totalApple) break;
    }

    return res;
};