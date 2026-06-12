/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const firstDate = date.slice(0,5)+'01-01';

    const d1 = new Date(firstDate);
    const d2 = new Date(date);

    const diff = (d2-d1)/(24*60*60*1000);
    
    return diff+1;
};