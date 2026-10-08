/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function(events) {
    const res = [0,0];
    for(let event of events){
        if(res[1]===10) break;
        
        if(event==="W"){
            res[1]+=1;
        } else if(event==="WD" || event==="NB"){
            res[0]+=1;
        } else {
            res[0]+=Number(event);
        }
    }

    return res;
};