/**
 * @param {string} startTime
 * @param {string} endTime
 * @return {number}
 */
var secondsBetweenTimes = function (startTime, endTime) {
    let start = startTime.split(":");
    let end = endTime.split(":");

    let seconds = 0;

    seconds += (parseInt(end[0]) - parseInt(start[0])) * 60 * 60;
    seconds += (parseInt(end[1]) - parseInt(start[1])) * 60;
    seconds += (parseInt(end[2]) - parseInt(start[2]));

    return seconds;
};