/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let angle = Math.abs(30*hour - 5.5*minutes);
    if(angle>180){
        return 360-angle;
    }
    return angle;
};