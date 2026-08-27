/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let small = Infinity;
    for(let task of tasks){
        const timeTaken = task[0]+task[1];
        small = Math.min(timeTaken,small);
    }

    return small;
};