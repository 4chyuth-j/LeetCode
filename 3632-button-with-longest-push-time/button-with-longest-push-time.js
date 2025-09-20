/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
    let max = 0;
    let ind = 0;
    let prev = 0;

    for (let i = 0; i < events.length; i++) {
        let duration = events[i][1] - prev;

        if (duration > max || (duration === max && events[i][0] < ind)) {
            max = duration;
            ind = events[i][0];
        }

        prev = events[i][1];
    }

    return ind;
};


