/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const start = arriveAlice > arriveBob ? arriveAlice : arriveBob;
    const leave = leaveAlice < leaveBob ? leaveAlice : leaveBob;

    if (start > leave) return 0;

    return getDate(leave) - getDate(start) + 1;

};

function getDate(date) {
    const numberOfDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const month = parseInt(date.slice(0, 2));
    const day = parseInt(date.slice(3));
    let days = day;
    for(let i=0; i<month-1; i++){
        days+=numberOfDaysInMonth[i];
    }

    return days;
}
