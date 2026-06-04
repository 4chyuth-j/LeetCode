/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let time = 0;
    
    for(let i=0; i<timeSeries.length; i++ ){
        let curr = timeSeries[i]+duration-1;
        if(curr==timeSeries[i+1]){
            time+=duration-1;
        }else if(curr>timeSeries[i+1]){
            time+=timeSeries[i+1]-timeSeries[i];
        } else {
            time+=duration;
        } 
    }

    return time;
};

/*
if(curr<timeSeries[i+1]){
            time+=duration;
        } else if (curr==timeSeries[i+1]){
            time+=duration-1;
        } 
 */