/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let count = 0;
    let i = 0;
    while(i<batteryPercentages.length){
        if(batteryPercentages[i]>count) count++;

        i++;
    }

    return count;
};