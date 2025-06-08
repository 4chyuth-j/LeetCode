/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sample = [...score].sort((a,b)=>(b-a));
    let obj = {};
    let rank = 4;
    for(let i =0; i<sample.length; i++){
        if(i==0)  obj[sample[i]]="Gold Medal";
        if(i==1)  obj[sample[i]]="Silver Medal";
        if(i==2)  obj[sample[i]]="Bronze Medal";

        if(i>2){
            obj[sample[i]]=String(rank);
            rank++;
        }
    }

    let result = score.map(item=>obj[item]);
    console.log(result);
    return result;
};