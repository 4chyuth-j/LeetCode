/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let time = 0;

    for(let i=0; i<timeSeries.length-1; i++ ){
        let diff = timeSeries[i+1]-timeSeries[i];
        time += diff>duration? duration: diff;
    }

    return timeSeries.length? time+duration : time ;
};

