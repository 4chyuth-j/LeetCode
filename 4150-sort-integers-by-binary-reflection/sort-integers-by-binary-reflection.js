/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortByReflection = function(nums) {
    let res = [];
    for(let num of nums){
        let str = num.toString(2).split("").reverse().join("");
        res.push({priority:parseInt(str,2),num});
    }


    res.sort((a,b)=>{
        if(a.priority!==b.priority){
            return a.priority-b.priority;
        }

        return a.num-b.num;
    });

    return res.map(item=>item.num)
};