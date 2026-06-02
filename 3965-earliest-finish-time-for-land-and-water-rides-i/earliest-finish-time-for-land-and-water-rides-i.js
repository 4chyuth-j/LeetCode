/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let ans = Infinity;

    for(let i=0; i<landStartTime.length; i++){
        const landFinish = landStartTime[i]+landDuration[i];
        for(let j=0; j<waterStartTime.length; j++){
            const waterFinish = waterStartTime[j]+waterDuration[j];

            //land to water
            const finish1 = Math.max(landFinish, waterStartTime[j]) + waterDuration[j];

            //water to land
            const finish2 = Math.max(waterFinish, landStartTime[i]) + landDuration[i];

            ans = Math.min(ans,finish1,finish2);

        }
    }

    return ans;
};