/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {

    const visited = new Set();
    const stack = [start];

    while(stack.length){
        const i = stack.pop();

        if(arr[i]===0) return true;
        if(visited.has(i)) continue;
        visited.add(i);

        const left = i - arr[i];
        const right = i + arr[i];

        if(left>=0) stack.push(left);
        if(right< arr.length) stack.push(right);
    }

    return false;
};